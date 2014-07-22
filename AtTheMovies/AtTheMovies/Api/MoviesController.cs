using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.UI;
using AtTheMovies.Data;
using AtTheMovies.Models;
using Glimpse.Core.Extensibility;

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

        public async Task<IHttpActionResult> PostMovie(Movie movie)
        {
            if (ModelState.IsValid)
            {
                await _dataSource.InsertAsync(movie);
                return CreatedAtRoute("DefaultApi", new {movie.Id}, movie);
            }
            return BadRequest(ModelState);
        }

        readonly MovieDataSource _dataSource = new MovieDataSource();

    }
}
