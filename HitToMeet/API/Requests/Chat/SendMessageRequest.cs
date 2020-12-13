using AutoMapper;
using HitToMeet.BL.Contracts.Chat;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.API.Requests.Chat
{
    [AutoMap(typeof(NewMessageContract), ReverseMap = true)]
    public class SendMessageRequest
    {
        public string Text { get; set; }
    }
}
