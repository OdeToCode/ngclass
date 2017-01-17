using System.Collections.Generic;
using System.Linq;
using Atthemovies.Models;

namespace Atthemovies.Services
{

    public interface IMovieDataStore
    {
        IEnumerable<Movie> GetAllMovies();
        Movie GetById(int id);
    }

    public class InMemoryMovieDataStore : IMovieDataStore
    {
        public IEnumerable<Movie> GetAllMovies()
        {
            return _movies;
        }

        public Movie GetById(int id)
        {
            return _movies.FirstOrDefault(m => m.Id == id);
        }

        private static List<Movie> _movies = new List<Movie>
        {
            new Movie {Id = 1, Title = "Star Wars", Rating = 5, Length = 20},
            new Movie {Id = 2, Title = "Harry Potter", Rating = 3, Length = 21},
            new Movie {Id = 3, Title = "Lord of the Rings", Rating = 1, Length = 21},
            new Movie {Id = 4, Title = "Monsters Inc.", Rating = 2, Length = 91},
        };   

    }
}