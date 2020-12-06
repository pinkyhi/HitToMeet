namespace HitToMeet.Core.Exceptions
{
    using System;
    using System.Runtime.Serialization;
    using HitToMeet.Core.Enums;
    using HitToMeet.Core.Resources;

    public class BaseAppException : Exception
    {
        public BaseAppException()
            : base(ErrorMessages.HitToMeetException)
        {
        }

        public BaseAppException(string message)
            : base(message)
        {
        }

        public BaseAppException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected BaseAppException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public virtual int Code => (int)ErrorCodesEnums.Global.Unknown;
    }
}
