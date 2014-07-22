using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using AtTheMovies.Data;
using AtTheMovies.Models;

namespace AtTheMovies.Api
{
    public class MoviesController : ApiController
    {
        public IHttpActionResult GetAll()
        {
            var movies = _dataSource.GetAllMovies();
            return Ok(movies);
        }

        public IHttpActionResult GetMovieById(int id)
        {
            var movie = _dataSource.GetMovieById(id);
            if (movie != null)
            {
                return Ok(movie);
            }
            return NotFound();
        }

        public IHttpActionResult PostMovie(Movie movie)
        {
            if (ModelState.IsValid)
            {
                _dataSource.Insert(movie);
                return CreatedAtRoute("DefaultApi", new {movie.Id}, movie);
            }
            return BadRequest(ModelState);
        }

        readonly MovieDataSource _dataSource = new MovieDataSource();

    }
}
