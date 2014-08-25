using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace AtTheMovies.Models
{
    public class GreetingModel
    {
        public string Message { get; set; }
        public DateTime TimeStamp { get; set; }
        public IEnumerable<Process> Processes { get; set; }
    }
}