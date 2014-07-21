using AtTheMovies.Data;
using AtTheMovies.Models;

namespace AtTheMovies.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AtTheMovies.Data.MovieDataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "AtTheMovies.Data.MovieDataContext";
        }

        protected override void Seed(MovieDataContext context)
        {
            context.Movies.AddOrUpdate(m => m.Title, 
                new Movie { Title = "Star Wars 4", Length=120, ReleaseDate=new DateTime(1976, 6, 1)},
                new Movie { Title = "Toy Story", Length = 90, ReleaseDate = new DateTime(1995, 1, 1) },
                new Movie { Title = "Jurassic Park", Length = 140, ReleaseDate = new DateTime(1993, 10, 1)});
            
                
                
        }
    }
}
