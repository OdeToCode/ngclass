using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Linq.Expressions;

namespace AtTheMovies.Data
{
    public class MovieDataSource : IDisposable
    {
        private MovieDataContext _dc;

        public MovieDataSource()
        {
            _dc = new MovieDataContext();
            _dc.Database.Log += s => Debug.WriteLine(s);
        }

        public IQueryable<Movie> GetAll()
        {
            //using (var db = new MovieDataContext())
            //{
                return _dc.Movies;
            //}
        }

        //public IEnumerable<Movie> GetByDSpecification(Expression<Func<Movie, bool>> predicate)
        //{
        //    // _ds.GetBySpec(m => m.Id == 1);

        //    //using (var db = new MovieDataContext())
        //    //{
        //    return _dc.Movies.Where(predicate).ToList();
        //    //}
        //}


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

        public void Dispose()
        {
            if (_dc != null)
            {
                _dc.Dispose();
            }
        }
    }
}
