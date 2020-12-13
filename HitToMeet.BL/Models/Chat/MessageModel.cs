using AutoMapper;
using HitToMeet.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace HitToMeet.BL.Models.Chat
{
    [AutoMap(typeof(Message), ReverseMap = true)]
    public class MessageModel
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public string Text { get; set; }

        public string SenderId { get; set; }

        public int ChatId { get; set; }
    }
}
