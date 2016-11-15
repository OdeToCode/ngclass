using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
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
        private readonly CookieOptions _cookieOptions;

        public AntiForgeryExampleController(IAntiforgery antiforgery, 
                                            IOptions<AntiforgeryOptions> antiforgeryOptions)
        {
            _antiforgery = antiforgery;
            _antiforgeryOptions = antiforgeryOptions.Value;
            _cookieOptions = new CookieOptions {HttpOnly = false}; // consider SecureOnly = true
        }

        [Route("[action]")]
        public IActionResult GetAntiforgeryToken()
        {
            var tokens = _antiforgery.GetAndStoreTokens(HttpContext);
            HttpContext.Response.Cookies.Append("XSRF-TOKEN", tokens.RequestToken, _cookieOptions);
            return new ObjectResult(tokens);
        }

        // the stock aspnetcore [ValidateAntiForgeryToken] will find the AFT in the HTTP headers
        [ValidateAntiForgeryToken] 
        public IActionResult Post([FromBody] Movie movie)
        {
            return new ObjectResult(movie);
        }
    }   
}
