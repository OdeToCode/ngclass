using System;
using System.Web.Mvc;
using AtTheMovies.Data;

namespace AtTheMovies.Helpers
{
    public static class ImageHelper
    {
        public static MvcHtmlString Image(this HtmlHelper helper, Movie movie)
        {
            var tagBuilder = new TagBuilder("img");
            tagBuilder.MergeAttribute("src", "http://fontmeme.com/images/Star-Wars-Poster.jpg");
            tagBuilder.MergeAttribute("alt", movie.Title);
            var html = tagBuilder.ToString(TagRenderMode.SelfClosing);
            return MvcHtmlString.Create(html);
        }
    }
}