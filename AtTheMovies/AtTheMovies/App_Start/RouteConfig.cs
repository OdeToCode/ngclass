using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace AtTheMovies
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");


            routes.MapRoute(name:"Movies route",
                             
                url: "movies/{action}",
                defaults: new {controller="Movies", action="List" }
                );
            
            routes.MapRoute(
                name: "Default",
                // /greetings/hello/Scott
                url: "{controller}/{action}/{id}",
               
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
