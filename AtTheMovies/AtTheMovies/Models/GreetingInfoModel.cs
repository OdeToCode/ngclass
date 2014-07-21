
using System;
using System.Collections.Generic;

namespace AtTheMovies.Models
{
    public class GreetingInfoModel
    {
        public GreetingInfoModel()
        {
            LotteryNumbers = new List<int>();
            for (var i = 0; i < 3; i++)
            {
               LotteryNumbers.Add(_rand.Next(100)); 
            }
        }

        public string Greeting { get; set; }
        public string Username { get; set; }
        public DateTime CurrentTime { get; set; }
        public List<int> LotteryNumbers { get; set; }
        private Random _rand = new Random();
    }
}