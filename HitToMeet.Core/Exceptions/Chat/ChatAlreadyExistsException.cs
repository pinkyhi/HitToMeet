using HitToMeet.Core.Enums;
using HitToMeet.Core.Resources;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace HitToMeet.Core.Exceptions.Chat
{
    public class ChatAlreadyExistsException : BaseAppException
    {
        public ChatAlreadyExistsException()
            : base(ErrorMessages.ChatAlreadyExistsException)
        {
        }

        public ChatAlreadyExistsException(string message)
            : base(message)
        {
        }

        public ChatAlreadyExistsException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected ChatAlreadyExistsException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public override int Code => (int)ErrorCodesEnums.Chat.AlreadyExists;
    }
}
