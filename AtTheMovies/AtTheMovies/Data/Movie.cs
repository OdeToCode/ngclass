using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Http.Results;
using System.Web.Mvc;

namespace AtTheMovies.Data
{
    public class Movie
    {
        public int Id { get; set; }

        [Required(ErrorMessageResourceType = typeof(ErrorMessages),
                  ErrorMessageResourceName = "Required")]
        [StringLength(255)]
        [DataType(DataType.Html)]
        [AllowHtml]
        public string Title { get; set; }

        [Display(Name="Released")]
        [DisplayFormat(DataFormatString="{0:MMMM yyyy}")]
        [Required]
        public DateTime ReleaseDate { get; set; }
        public int Length { get; set; }

    }
}