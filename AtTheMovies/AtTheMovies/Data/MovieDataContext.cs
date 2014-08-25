using System.Data.Entity;

namespace AtTheMovies.Data
{
    public class MovieDataContext : DbContext
    {
        public MovieDataContext()
            : base("DefaultConnection")
        {
            
        }

        public DbSet<Movie> Movies { get; set; }


        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Movie>().ToTable("tbl_Movie");

        //    base.OnModelCreating(modelBuilder);
        //}
    }
}