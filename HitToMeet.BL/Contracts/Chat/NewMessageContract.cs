using AutoMapper;
using HitToMeet.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HitToMeet.BL.Contracts.Chat
{
    [AutoMap(typeof(Message), ReverseMap = true)]
    public class NewMessageContract
    {
        public string Text { get; set; }

        public string SenderId { get; set; }

        public int ChatId { get; set; }
    }
}
