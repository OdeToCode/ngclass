using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    }
}
