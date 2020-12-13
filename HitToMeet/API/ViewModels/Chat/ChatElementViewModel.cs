using AutoMapper;
using HitToMeet.BL.Models.Chat;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.API.ViewModels.Chat
{
    [AutoMap(typeof(ChatElementModel), ReverseMap = true)]
    public class ChatElementViewModel
    {
        public int Id { get; set; }

        public MessageViewModel LastMessage { get; set; }

        public ChatUserViewModel User { get; set; }
    }
}
