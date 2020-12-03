using AutoMapper;
using HitToMeet.API.ViewModels.User;
using HitToMeet.BL.Contracts.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.API.Requests.User
{
    [AutoMap(typeof(UpdateUserProfileContract), ReverseMap = true)]
    public class UpdateUserProfileRequest
    {
        public string Description { get; set; }

        public int? Sex { get; set; }

        public int? PickedSkin { get; set; }
    }
}
