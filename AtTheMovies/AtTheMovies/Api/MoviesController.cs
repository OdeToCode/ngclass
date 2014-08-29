using System.Collections;
using System.Collections.Generic;
using System.Threading;
using System.Web.Http;
using AtTheMovies.Data;

namespace AtTheMovies.Api
{
    public class MoviesController : ApiController
    {
        public IHttpActionResult GetAllMovies()
        {
         
            var db = new MovieDataSource();
            return Ok(db.GetAll());
        }

        public IHttpActionResult GetMovieById(int id)
        {
            var db = new MovieDataSource();
            var movie = db.GetById(id);
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        public IHttpActionResult PostMovie(Movie newMovie)
        {
            if (ModelState.IsValid)
            {
                var db = new MovieDataSource();
                db.Add(newMovie);
                return CreatedAtRoute("DefaultApi", new { id = newMovie.Id }, newMovie);
            }
            return BadRequest(ModelState);
        }

        public IHttpActionResult Delete(int id)
        {
            var db = new MovieDataSource();
            db.DeleteById(id);
            return Ok(id);
        }

        public IHttpActionResult PutMovie(Movie updateMovie)
        {
            if (ModelState.IsValid)
            {
                var db = new MovieDataSource();
                db.Update(updateMovie);
                return Ok(updateMovie);
            }
            return BadRequest(ModelState);
        }
    }
}
