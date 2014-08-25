using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Http.Results;

namespace AtTheMovies.Data
{
    public class Movie
    {
        public int Id { get; set; }

        [Required(ErrorMessageResourceType = typeof(ErrorMessages),
                        ErrorMessageResourceName = "Required")]
        [StringLength(255)]
        public string Title { get; set; }

        [Display(Name="Release On")]
        public DateTime ReleaseDate { get; set; }
        public int Length { get; set; }

    }
}