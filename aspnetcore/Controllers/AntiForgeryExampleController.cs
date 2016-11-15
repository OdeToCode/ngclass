using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Movies.Controllers
{
    [Route("api/[controller]")]
    public class AntiForgeryExampleController : Controller
    {
        // IAntiforgery will get the default Antiforgery service of ASP.NET Core in this app
        private readonly IAntiforgery _antiforgery;
        private readonly AntiforgeryOptions _antiforgeryOptions;

        public AntiForgeryExampleController(IAntiforgery antiforgery, 
                                            IOptions<AntiforgeryOptions> antiforgeryOptions)
        {
            _antiforgery = antiforgery;
            _antiforgeryOptions = antiforgeryOptions.Value;
        }

        [Route("[action]")]
        public IActionResult GetAntiforgeryToken()
        {
            var tokens = _antiforgery.GetAndStoreTokens(HttpContext);
            var model = new AntiForgeryResponse
            {
                RequestToken = tokens.RequestToken,
                HeaderName = _antiforgeryOptions.HeaderName
            };
            return new ObjectResult(model);
        }

        // the stock aspnetcore [VAFT] attribute will find the AFT in the HTTP headers
        [ValidateAntiForgeryToken] 
        public IActionResult Post([FromBody] Movie movie)
        {
            return new ObjectResult(movie);
        }
    }

    public class AntiForgeryResponse
    {
        public string RequestToken { get; set; }
        public string HeaderName { get; set; }
    }
}
