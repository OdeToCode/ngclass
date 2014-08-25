using System;
using System.ComponentModel.DataAnnotations;

namespace AtTheMovies.Data
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }

        [Display(Name="Release On")]
        public DateTime ReleaseDate { get; set; }
        public int Length { get; set; }

    }
}