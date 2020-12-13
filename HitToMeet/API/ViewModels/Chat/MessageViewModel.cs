using AutoMapper;
using HitToMeet.BL.Models.Chat;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.API.ViewModels.Chat
{
    [AutoMap(typeof(MessageModel), ReverseMap = true)]
    public class MessageViewModel
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public string Text { get; set; }

        public string SenderId { get; set; }

        public int ChatId { get; set; }
    }
}
