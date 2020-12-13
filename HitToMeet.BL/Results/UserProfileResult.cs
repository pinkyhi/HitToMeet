using AutoMapper;
using HitToMeet.BL.Models.Quiz;
using HitToMeet.BL.Models.User;
using HitToMeet.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HitToMeet.BL.Results
{
    [AutoMap(typeof(User), ReverseMap = true)]
    public class UserProfileResult
    {
        public DateTime RegistrationDate { get; set; }

        public int? AnimalId { get; set; }

        public AnimalModel Animal { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public string Description { get; set; }

        public int Sex { get; set; }

        public int PointsBalance { get; set; }

        public int Balance { get; set; }

        public IEnumerable<UserSkinModel> UserSkins { get; set; }

        public string Id { get; set; }
    }
}
