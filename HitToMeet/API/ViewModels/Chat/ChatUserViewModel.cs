using AutoMapper;
using HitToMeet.API.ViewModels.Skin;
using HitToMeet.BL.Models.Chat;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.API.ViewModels.Chat
{
    [AutoMap(typeof(ChatUserModel), ReverseMap = true)]
    public class ChatUserViewModel
    {
        public string Id { get; set; }

        public string UserName { get; set; }

        public SkinViewModel Skin { get; set; }
    }
}
