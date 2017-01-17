using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Atthemovies.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Foo() {
            return Content("Hello from Foo");
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
