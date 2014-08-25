using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AtTheMovies.Controllers
{
    public class NewsController : Controller
    {
        public PartialViewResult CurrentNews()
        {
            return PartialView();
        }
    }
}