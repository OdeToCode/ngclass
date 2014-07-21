using System;
using System.Linq;
using System.Web.Mvc;
using AtTheMovies.Data;
using AtTheMovies.Models;

namespace AtTheMovies.Controllers
{
    public class MovieController : Controller
    {
        public ViewResult Index()
        {
            var model = _data.GetAllMovies().OrderByDescending(m => m.ReleaseDate);
                                            
            return View(model);
        }

        public ActionResult Detail(int id)
        {
            var model = _data.GetMovieById(id);
            if (model == null)
            {
                return HttpNotFound();
            }
            return View(model);
        }

        [HttpGet]
        public ViewResult Create()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Edit(int id)
        {
            var model = _data.GetMovieById(id);
            if (model == null)
            {
                return HttpNotFound();
            }
            return View(model);
        }

        [HttpPost]
        public ActionResult Create(Movie newMovie)
        {
            if (ModelState.IsValid)
            {
                _data.Insert(newMovie);
                return RedirectToAction("Detail", new  { id=newMovie.Id});
            }
            return View(newMovie);
        }

        [HttpPost]
        public ActionResult Edit(Movie movie)
        {
            if (ModelState.IsValid)
            {
                _data.Update(movie);
                return RedirectToAction("Index");
            }
            return View(movie);
        }

        MovieDataSource _data = new MovieDataSource();
    }
}