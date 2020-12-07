using HitToMeet.Core.Enums;
using HitToMeet.Core.Resources;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace HitToMeet.Core.Exceptions.User
{
    public class SkinNotFoundException : BaseAppException
    {
        public SkinNotFoundException()
            : base(ErrorMessages.SkinNotFoundException)
        {
        }

        public SkinNotFoundException(string message)
            : base(message)
        {
        }

        public SkinNotFoundException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected SkinNotFoundException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public override int Code => (int)ErrorCodesEnums.User.SkinNotFound;
    }
}
