using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AtTheMovies.Models;

namespace AtTheMovies.Data
{
    public class MovieDataSource
    {
        static MovieDataSource()
        {
            _movies.Add(new Movie() { Id = 1, Title = "Star Wars 4", Length=120, ReleaseDate=new DateTime(1976, 6, 1)});
            _movies.Add(new Movie() { Id = 1, Title = "Toy Story", Length = 90, ReleaseDate = new DateTime(1995, 1, 1) });
            _movies.Add(new Movie() { Id = 1, Title = "Jurassic Park", Length = 140, ReleaseDate = new DateTime(1993, 10, 1) });
        }

        public IQueryable<Movie> GetAllMovies()
        {
            return _movies.AsQueryable();
        }

        public Movie GetMovieById(int id)
        {
            return _movies.FirstOrDefault(m => m.Id == id);
        }

        public void Update(Movie movie)
        {
            _movies.Remove(_movies.Find(m => m.Id == movie.Id));
            _movies.Add(movie);
        }

        static List<Movie> _movies = new List<Movie>();


       
    }
}