using System;
using System.Collections.Generic;
using System.Linq;

namespace AtTheMovies.Data
{
    public class MovieDataSource
    {
        static MovieDataSource()
        {
            _movies.Add(new Movie { Id = 1, Title = "Star Wars - A New Hope", Length = 125, ReleaseDate = new DateTime(1977, 5, 25) });
            _movies.Add(new Movie { Id = 2, Title = "Star Wars - The Empire Strikes Back", Length = 127, ReleaseDate = new DateTime(1980, 5, 21) });
            _movies.Add(new Movie { Id = 3, Title = "Star Wars - Return of the Jedi", Length = 136, ReleaseDate = new DateTime(1983, 5, 23) });
        }

        public IEnumerable<Movie> GetAll()
        {
            return _movies;
        }

        public Movie Update(Movie updatedMovie)
        {
            var target = _movies.SingleOrDefault(m => m.Id == updatedMovie.Id);
            _movies.Remove(target);
            _movies.Add(updatedMovie);
            return updatedMovie;
        }
         public Movie GetById(int id)
         {
             return _movies.FirstOrDefault(m => m.Id == id);
         }

        static List<Movie> _movies = new List<Movie>();


       
    }
}
