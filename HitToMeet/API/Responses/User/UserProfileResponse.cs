using AutoMapper;
using HitToMeet.API.ViewModels.Quiz;
using HitToMeet.API.ViewModels.User;
using HitToMeet.BL.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.API.Responses.User
{
    [AutoMap(typeof(UserProfileResult), ReverseMap = true)]
    public class UserProfileResponse
    {
        public DateTime RegistrationDate { get; set; }

        public int? AnimalId { get; set; }

        public AnimalViewModel Animal { get; set; }

        public string Description { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public int Sex { get; set; }

        public int PointsBalance { get; set; }

        public int Balance { get; set; }

        public IEnumerable<UserSkinViewModel> UserSkins { get; set; }
    }
}
