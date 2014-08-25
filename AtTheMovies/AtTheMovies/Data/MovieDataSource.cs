using System;
using System.Collections.Generic;

namespace AtTheMovies.Data
{
    public class MovieDataSource
    {
        public MovieDataSource()
        {
            _movies.Add(new Movie { Id = 1, Title="Star Wars", Length = 101, ReleaseDate = new DateTime(1977, 1, 1)});
            _movies.Add(new Movie { Id=2, Title="Empire Strikes Back", Length=120, ReleaseDate=new DateTime(1981, 6, 1)});
            _movies.Add(new Movie { Id = 3, Title="Return of the Jedi", Length=99, ReleaseDate=new DateTime(1984, 11,1)});
        }

        public IEnumerable<Movie> GetAll()
        {
            return _movies;
        } 

        static List<Movie> _movies = new List<Movie>();
    }
}