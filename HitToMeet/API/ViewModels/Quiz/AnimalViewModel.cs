using AutoMapper;
using HitToMeet.BL.Models.Quiz;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.API.ViewModels.Quiz
{
    [AutoMap(typeof(AnimalModel), ReverseMap = true)]
    public class AnimalViewModel
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public string Title { get; set; }

        public int MinPoints { get; set; }

        public int MaxPoints { get; set; }
    }
}
