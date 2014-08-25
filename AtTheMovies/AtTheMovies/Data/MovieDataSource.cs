using System;
using System.Collections.Generic;
using System.Linq;

namespace AtTheMovies.Data
{
    public class MovieDataSource
    {
        static MovieDataSource()
        {
            _movies.Add(new Movie { Id = 1, Title="Star Wars", Length = 101, ReleaseDate = new DateTime(1977, 1, 1)});
            _movies.Add(new Movie { Id=2, Title="Empire Strikes Back", Length=120, ReleaseDate=new DateTime(1981, 6, 1)});
            _movies.Add(new Movie { Id = 3, Title="Return of the Jedi", Length=99, ReleaseDate=new DateTime(1984, 11,1)});
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