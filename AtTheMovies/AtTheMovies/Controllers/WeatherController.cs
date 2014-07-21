using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AtTheMovies.Controllers
{
    public class WeatherController : Controller
    {
        // GET: Weather
        public PartialViewResult Current()
        {
            return PartialView();
        }
    }
}