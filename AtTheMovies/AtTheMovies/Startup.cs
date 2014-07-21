using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AtTheMovies.Startup))]
namespace AtTheMovies
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
