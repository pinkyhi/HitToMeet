using AutoMapper;
using HitToMeet.BL.Models.Chat;
using System;
using System.Collections.Generic;
using System.Text;

namespace HitToMeet.BL.Results.Chat
{
    [AutoMap(typeof(DAL.Entities.Chat), ReverseMap = true)]
    public class ChatResult
    {
        public int Id { get; set; }

        public string InitiatorId { get; set; }

        public ChatUserModel Initiator { get; set; }

        public string AcceptorId { get; set; }

        public ChatUserModel Acceptor { get; set; }

        public int ChatStatus { get; set; }

        public IEnumerable<MessageModel> Messages { get; set; }
    }
}
