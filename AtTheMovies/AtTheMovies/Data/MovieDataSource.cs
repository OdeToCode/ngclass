using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;
using AtTheMovies.Models;

namespace AtTheMovies.Data
{
    public class MovieDataSource 
    {
        public MovieDataSource()
        {
            _context = new MovieDataContext();
        }


        public IList<Movie> GetAllMovies(int pageNumber, int pageSize)
        {
            return _context.Movies.Skip(pageNumber*(pageSize - 1)).Take(pageSize).ToList();
        }

        public IQueryable<Movie> GetAllMovies()
        {

            return _context.Movies;
        }

        public Movie GetMovieById(int id)
        {
            return _context.Movies.Find(id);
        }

        public void Update(Movie movie)
        {
            _context.Entry(movie).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Insert(Movie newMovie)
        {
            _context.Movies.Add(newMovie);
            _context.SaveChanges();
        }

        private MovieDataContext _context;
    }
}