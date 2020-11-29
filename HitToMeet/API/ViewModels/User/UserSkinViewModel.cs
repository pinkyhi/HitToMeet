using AutoMapper;
using HitToMeet.API.ViewModels.Skin;
using HitToMeet.BL.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.API.ViewModels.User
{
    [AutoMap(typeof(UserSkinModel), ReverseMap = true)]
    public class UserSkinViewModel
    {
        public string UserId { get; set; }

        public int SkinId { get; set; }

        public SkinViewModel Skin { get; set; }

        public int SkinStatus { get; set; }
    }
}
