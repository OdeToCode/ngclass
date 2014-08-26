using System.Collections.Generic;
using AtTheMovies.Data;

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
        }

        protected override void Seed(MovieDataContext context)
        {
            var defaultMovies = new List<Movie>();

            defaultMovies.Add(new Movie { Title = "Star Wars - A New Hope", Length = 101, ReleaseDate = new DateTime(1977, 1, 1) });
            defaultMovies.Add(new Movie { Title = "Star Wars - The Empire Strikes Back", Length = 120, ReleaseDate = new DateTime(1981, 6, 1) });
            defaultMovies.Add(new Movie { Title = "Star Wars - Return of the Jedi", Length = 99, ReleaseDate = new DateTime(1984, 11, 1) });
        
            context.Movies.AddOrUpdate(m => m.Title, defaultMovies.ToArray());
        }
    }
}
