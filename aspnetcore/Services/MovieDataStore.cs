﻿using System.Collections.Generic;
using System.Linq;
using Atthemovies.Models;

namespace Atthemovies.Services
{

    public interface IMovieDataStore
    {
        IEnumerable<Movie> GetAllMovies();
        Movie GetById(int id);
        Movie Update(Movie movie);
        Movie Create(Movie movie);
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

        public Movie Update(Movie updatedMovie)
        {
            var movie = _movies.FirstOrDefault(m => m.Id == updatedMovie.Id);
            if (movie != null)
            {
                movie.Length = updatedMovie.Length;
                movie.Title = updatedMovie.Title;
                movie.Rating = updatedMovie.Rating;
            }
            return movie;
        }

        public Movie Create(Movie newMovie)
        {
            newMovie.Id = _movies.Max(m => m.Id) + 1;
            _movies.Add(newMovie);
            return newMovie;
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