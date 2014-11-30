using System.Web.Http;
using Newtonsoft.Json.Serialization;

namespace AtTheMovies
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
        
            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = 
                new CamelCasePropertyNamesContractResolver();

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
