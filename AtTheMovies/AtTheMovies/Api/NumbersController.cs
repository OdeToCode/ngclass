using System.Web.Http;

namespace AtTheMovies.Api
{
    public class NumbersController : ApiController
    {
        public int[] GetNumber()
        {
            return new[] {42, 24};
        }

        public int PostNumber([FromBody]int number)
        {
            return number;
        }
    }
}
