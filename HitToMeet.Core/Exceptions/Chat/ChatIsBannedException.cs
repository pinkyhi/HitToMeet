using HitToMeet.Core.Enums;
using HitToMeet.Core.Resources;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace HitToMeet.Core.Exceptions.Chat
{
    public class ChatIsBannedException : BaseAppException
    {
        public ChatIsBannedException()
            : base(ErrorMessages.ChatIsBannedException)
        {
        }

        public ChatIsBannedException(string message)
            : base(message)
        {
        }

        public ChatIsBannedException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected ChatIsBannedException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public override int Code => (int)ErrorCodesEnums.Chat.IsBanned;
    }
}
