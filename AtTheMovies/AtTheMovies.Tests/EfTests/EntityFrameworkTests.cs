using System;
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

            var movie1 = db.Movies.Find(1);
            var movie2 = db.Movies.Find(1);

            Assert.IsTrue(Object.ReferenceEquals(movie1, movie2));
        }

        [TestMethod]
        public void Foo()
        {
            var db = new MovieDataContext();

            var movie1 = db.Movies.Find(1);
            var movie2 = db.Movies.Find(1);

            Assert.IsTrue(Object.ReferenceEquals(movie1, movie2));
        }

    }
}
