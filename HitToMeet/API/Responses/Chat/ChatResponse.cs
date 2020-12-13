using AutoMapper;
using HitToMeet.API.ViewModels.Chat;
using HitToMeet.BL.Results.Chat;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.API.Responses.Chat
{
    [AutoMap(typeof(ChatResult), ReverseMap = true)]
    public class ChatResponse
    {
        public int Id { get; set; }

        public string InitiatorId { get; set; }

        public ChatUserViewModel Initiator { get; set; }

        public string AcceptorId { get; set; }

        public ChatUserViewModel Acceptor { get; set; }

        public int ChatStatus { get; set; }

        public IEnumerable<MessageViewModel> Messages { get; set; }
    }
}
