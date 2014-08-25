using System;
using System.Diagnostics;
using System.Web.Mvc;
using AtTheMovies.Models;

namespace AtTheMovies.Controllers
{
    [OutputCache(Duration=60)]
    public class GreetingsController : Controller
    {

        public ViewResult Hello(string id, string lastName)
        {
            var model = new GreetingModel
            {
                Message = "Hello " + id + " " + lastName + "!",
                TimeStamp = DateTime.Now,
                Processes = Process.GetProcesses()
            };

            return View(model);
        }

    }
}