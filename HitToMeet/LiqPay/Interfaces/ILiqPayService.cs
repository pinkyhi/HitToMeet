namespace HitToMeet.LiqPay.Interfaces
{
    using HitToMeet.LiqPay.Models;

    public interface ILiqPayService
    {
        public(string data, string signature) EncryptLiqPay(LiqPayCheckoutModel model);

        public bool CheckDataBySignature(string data, string signature, string private_key);

        public LiqPayAnswerModel AnswerModelFromData(string data);
    }
}