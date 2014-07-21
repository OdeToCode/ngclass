using System.Data.Entity;
using AtTheMovies.Models;

namespace AtTheMovies.Data
{
    public class MovieDataContext : DbContext
    {
        public MovieDataContext()
            : base("name=MyMoviesDb")
        {
            
        }

        public DbSet<Movie> Movies { get; set; }
    }
}