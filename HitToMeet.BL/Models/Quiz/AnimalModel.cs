using AutoMapper;
using HitToMeet.DAL.Entities;
using HitToMeet.DAL.Entities.Quiz;
using System;
using System.Collections.Generic;
using System.Text;

namespace HitToMeet.BL.Models.Quiz
{
    [AutoMap(typeof(Animal), ReverseMap = true)]
    public class AnimalModel
    {
        public int Id { get; set; }

        public string Description { get; set; }

        public string Title { get; set; }

        public int MinPoints { get; set; }

        public int MaxPoints { get; set; }
    }
}
