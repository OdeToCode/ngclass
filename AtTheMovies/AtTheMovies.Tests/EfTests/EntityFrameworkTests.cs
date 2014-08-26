using System;
using System.Data.Entity.Infrastructure;
using System.Linq;
using AtTheMovies.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AtTheMovies.Tests.EfTests
{
    [TestClass]
    public class EntityFrameworkTests
    {
        [TestMethod]
        public void DbContext_Keeps_An_Identity_Map_Of_Entities()
        {
            var db = new MovieDataContext();

            var movie1 = db.Movies.Single(m => m.Title == "Jurassic Park");
            var movie2 = db.Movies.Single(m => m.Id == 4);

            Assert.IsTrue(Object.ReferenceEquals(movie1, movie2));
        }

        [TestMethod]
        public void Identity_Map_Is_Per_Context()
        {
            var db1 = new MovieDataContext();
            var db2 = new MovieDataContext();

            var movie1 = db1.Movies.Single(m => m.Title == "Jurassic Park");
            var movie2 = db2.Movies.Single(m => m.Id == 4);

            Assert.IsFalse(Object.ReferenceEquals(movie1, movie2));
        }

        [TestMethod]
        public void DataContext_Is_A_Unit_Of_Work()
        {
            var db1 = new MovieDataContext();
            var db2 = new MovieDataContext();

            var movie1 = db1.Movies.Single(m => m.Title == "Jurassic Park");
            var movie2 = db2.Movies.Single(m => m.Title == "Jurassic Park");
            movie2.Length += 1;
            db2.SaveChanges();

            movie1 = db1.Movies.Single(m => m.Title == "Jurassic Park");
            
            Assert.AreNotEqual(movie1.Length, movie2.Length);
        }

        [TestMethod]
        public void Can_Reload_an_Entity()
        {
            var db1 = new MovieDataContext();
            var db2 = new MovieDataContext();

            var movie1 = db1.Movies.Single(m => m.Title == "Jurassic Park");
            var movie2 = db2.Movies.Single(m => m.Title == "Jurassic Park");
            movie2.Length += 1;
            db2.SaveChanges();

            db1.Entry(movie1).Reload();

            Assert.AreEqual(movie1.Length, movie2.Length);
        }


        [TestMethod]
        [ExpectedException(typeof(DbUpdateConcurrencyException))]
        public void Optimisitc_Concurrency_Off_By_Default()
        {
            var db1 = new MovieDataContext();
            var db2 = new MovieDataContext();

            var movie1 = db1.Movies.Single(m => m.Title == "Jurassic Park");
            var movie2 = db2.Movies.Single(m => m.Title == "Jurassic Park");
            movie2.Length += 1;
            db2.SaveChanges();

            movie1.Length += 2;
            db1.SaveChanges();

            
        }

    }
}
