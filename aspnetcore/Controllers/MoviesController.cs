using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Atthemovies.Models;
using Atthemovies.Services;
using Microsoft.AspNetCore.Mvc;

namespace Atthemovies.Controllers
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        private readonly IMovieDataStore _store;

        public MoviesController(IMovieDataStore store)
        {
            _store = store;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return new ObjectResult(_store.GetAllMovies());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            var movie = _store.GetById(id);
            if (movie == null)
            {
                return NotFound();
            }
            return new ObjectResult(movie);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            movie = _store.Update(movie);
            return new ObjectResult(movie);
        }
    }
}
