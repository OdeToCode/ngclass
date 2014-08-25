using System;
using System.Web.Mvc;
using AtTheMovies.Data;

namespace AtTheMovies.Controllers
{
    [HandleError(View="MoviesError")]
    public class MoviesController : Controller
    {
        public ViewResult List()
        {
            var dataSource = new MovieDataSource();
            var model = dataSource.GetAll();
            return View(model);
        }

        [HttpGet]
        public ActionResult Edit(int id)
        {
            var dataSource = new MovieDataSource();
            var model = dataSource.GetById(id);

            if (model == null)
            {
                return RedirectToAction("List");
            }

            return View(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Movie updatedMovie)
        {
            if (ModelState.IsValid)
            {
                var dataSource = new MovieDataSource();
                var model = dataSource.Update(updatedMovie);
                return RedirectToAction("Details", new {id = model.Id});
            }
            return View(updatedMovie);
        }

        public ActionResult Details(int id)
        {
            var dataSource = new MovieDataSource();
            var model = dataSource.GetById(id);

            if (model == null)
            {
                return RedirectToAction("List");
            }

            return View(model);
        } 
    }
}