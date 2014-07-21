using System;
using System.Web.Mvc;
using AtTheMovies.Models;

namespace AtTheMovies.Controllers
{
    // /company/info

    [OutputCache(Duration=10)]
    public class CompanyController : Controller
    {
     
        public ViewResult Info(string name)
        {
            var model = new GreetingInfoModel();
            model.CurrentTime = DateTime.Now;
            model.Greeting = "Hello!";
            //model.Greeting = "<script>...</script>";

            model.Username = name ?? "empty";

            return View("Index", model);
        }

    }
}