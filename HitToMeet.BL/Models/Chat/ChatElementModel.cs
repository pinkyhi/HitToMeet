using System;
using System.Collections.Generic;
using System.Text;

namespace HitToMeet.BL.Models.Chat
{
    public class ChatElementModel
    {
        public int Id { get; set; }

        public MessageModel LastMessage { get; set; }

        public ChatUserModel User { get; set; }
    }
}
