using System.Data.Entity;
using System.Linq;

namespace AtTheMovies.Data
{
    public class MovieDataSource
    {
        private MovieDataContext _dc;

        public MovieDataSource()
        {
            _dc = new MovieDataContext();
        }

        public IQueryable<Movie> GetAll()
        {
            return _dc.Movies;
        }

        public Movie Update(Movie updatedMovie)
        {
            var entry = _dc.Entry(updatedMovie);
            entry.State = EntityState.Modified;
            _dc.SaveChanges();
            return updatedMovie;
        }
         
        public Movie GetById(int id)
        {
            return _dc.Movies.FirstOrDefault(m => m.Id == id);
        }


        public void Add(Movie newMovie)
        {
            _dc.Movies.Add(newMovie);
            _dc.SaveChanges();
        }
    }
}
