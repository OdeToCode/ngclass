using System;
using System.Linq;
using System.Runtime.InteropServices;
using AtTheMovies.Data;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AtTheMovies.Tests.EntityFramework
{
    [TestClass]
    public class EfTests
    {

        [TestMethod]
        public void Maintains_An_Identity_Map_For_Objects()
        {
            var db = new MovieDataContext();

            var movie1 = db.Movies.First(m => m.Id == 1);
            var movie2 = db.Movies.First(m => m.Id == 1);

            Assert.IsTrue(Object.ReferenceEquals(movie1, movie2));

        }


        [TestMethod]
        public void Identity_Map_Is_Per_Context_Instance()
        {
            var db1 = new MovieDataContext();
            var db2 = new MovieDataContext();


            var movie1 = db1.Movies.First(m => m.Id == 1);
            var movie2 = db2.Movies.First(m => m.Id == 1);

            Assert.IsFalse(Object.ReferenceEquals(movie1, movie2));

        }

        [TestMethod]
        public void Updates_As_Expected()
        {
            var db1 = new MovieDataContext();
            var db2 = new MovieDataContext();



            var movie1 = db1.Movies.First(m => m.Id == 1);
            var originalLength = movie1.Length;
            movie1.Length += 1;
            db1.SaveChanges();
           
            var movie2 = db2.Movies.First(m => m.Id == 1);

            Assert.IsTrue(movie2.Length == originalLength + 1);


        }


        [TestMethod]
        public void DbContext_Is_A_Unit_Of_Work()
        {
            var db1 = new MovieDataContext();
            var db2 = new MovieDataContext();

            var movie1 = db1.Movies.First(m => m.Id == 1);
            var originalLength = movie1.Length;
            
            var movie2 = db2.Movies.First(m => m.Id == 1);
            movie2.Length += 1;
            db2.SaveChanges();

            movie1 = db1.Movies.First(m => m.Id == 1);
         
            Assert.IsTrue(movie1.Length == originalLength);
        }


        [TestMethod]
        public void DbContext_DOES_NOT_Have_Optimisic_Concurrency_By_Default()
        {
            var db1 = new MovieDataContext();
            var db2 = new MovieDataContext();

            var movie1 = db1.Movies.First(m => m.Id == 1);
            var originalLength = movie1.Length;

            var movie2 = db2.Movies.First(m => m.Id == 1);
            movie2.Length += 1;
            db2.SaveChanges();

            movie1.Length += 2;           
            db1.SaveChanges();

            var db3 = new MovieDataContext();
            var movie3 = db3.Movies.Find(1);
            Assert.AreEqual(originalLength + 2, movie3.Length);

        }

    }
}
