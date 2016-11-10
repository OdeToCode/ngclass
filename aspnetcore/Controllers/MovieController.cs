using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Movies.Controllers
{
    [Route("/api/[controller]")]
    public class MoviesController : Controller
    {
        private readonly IMovieStore _store;

        public MoviesController(IMovieStore store)
        {
            _store = store;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return new ObjectResult(_store.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var movie = _store.GetById(id);
            if (movie != null)
            {
                return new OkObjectResult(movie);
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult Post([FromBody]Movie movie)
        {
            if (ModelState.IsValid)
            {
                movie = _store.CreateMovie(movie);
                return new ObjectResult(movie);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Movie movie)
        {
            if (ModelState.IsValid)
            {
                var updatedMovie = _store.UpdateMovie(movie);
                if (updatedMovie == null)
                {
                    return NotFound();
                }
                return new ObjectResult(updatedMovie);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete]
        public IActionResult Delete([FromBody]Movie movie)
        {
            var deletedMovie = _store.DeleteMovie(movie);
            if (deletedMovie == null)
            {
                return NotFound();
            }
            return new ObjectResult(movie);
        }
    }

    public class Movie
    {
        public int Id { get; set; }
        [Required, MaxLength(80)]
        public string Title { get; set; }
        public int Rating { get; set; }
    }

    public interface IMovieStore
    {
        IEnumerable<Movie> GetAll();
        Movie GetById(int id);
        Movie UpdateMovie(Movie movie);
        Movie CreateMovie(Movie movie);
        Movie DeleteMovie(Movie movie);
    }

    public class InMemoryMovieStore : IMovieStore
    {
        private List<Movie> _movies;

        public InMemoryMovieStore()
        {
            _movies = new List<Movie>();
            _movies.Add(new Movie() {Id = 1, Title = "Star Wars", Rating = 4});
        }

        public IEnumerable<Movie> GetAll()
        {
            return _movies;
        }

        public Movie GetById(int id)
        {
            return _movies.FirstOrDefault(m => m.Id == id);
        }

        public Movie UpdateMovie(Movie movie)
        {
            var existingMovie = _movies.FirstOrDefault(m => m.Id == movie.Id);
            if (existingMovie != null)
            {
                existingMovie.Title = movie.Title;
                existingMovie.Rating = movie.Rating;
            }
            return existingMovie;
        }

        public Movie CreateMovie(Movie movie)
        {
            var newId = _movies.Max(m => m.Id);
            movie.Id = newId;
            _movies.Add(movie);
            return movie;
        }

        public Movie DeleteMovie(Movie movie)
        {
            _movies.Remove(_movies.FirstOrDefault(m => m.Id == movie.Id));
            return movie;
        }
    }
}