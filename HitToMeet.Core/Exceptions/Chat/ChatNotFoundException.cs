using HitToMeet.Core.Enums;
using HitToMeet.Core.Resources;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace HitToMeet.Core.Exceptions.Chat
{
    public class ChatNotFoundException : BaseAppException
    {

        public ChatNotFoundException()
            : base(ErrorMessages.ChatNotFoundException)
        {
        }

        public ChatNotFoundException(string message)
            : base(message)
        {
        }

        public ChatNotFoundException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected ChatNotFoundException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public override int Code => (int)ErrorCodesEnums.Chat.NotFound;
    }
}
