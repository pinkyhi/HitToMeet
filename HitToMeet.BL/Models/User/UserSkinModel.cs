using AutoMapper;
using HitToMeet.BL.Models.Casino;
using HitToMeet.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HitToMeet.BL.Models.User
{
    [AutoMap(typeof(UserSkin), ReverseMap = true)]
    public class UserSkinModel
    {
        public string UserId { get; set; }

        public int SkinId { get; set; }

        public SkinModel Skin { get; set; }

        public int SkinStatus { get; set; }
    }
}
