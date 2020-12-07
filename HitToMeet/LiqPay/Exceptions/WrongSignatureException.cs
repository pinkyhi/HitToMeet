namespace HitToMeet.LiqPay.Exceptions
{
    using HitToMeet.Core.Exceptions;
    using HitToMeet.LiqPay.Enums;
    using HitToMeet.LiqPay.Resources;

    public class WrongSignatureException : BaseAppException
    {
        public WrongSignatureException()
            : base(LiqPayErrorMessages.WrongSignatureException)
        {
        }

        public WrongSignatureException(string message)
            : base(message)
        {
        }

        public override int Code => (int)LiqPayErrorCodesEnum.WrongSignature;
    }
}