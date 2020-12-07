namespace HitToMeet.WebServices.Services
{
    using System;
    using HitToMeet.LiqPay.Interfaces;
    using HitToMeet.LiqPay.Models;
    using HitToMeet.LiqPay.Resolvers;
    using Newtonsoft.Json;

    public class LiqPayService : ILiqPayService
    {
        public LiqPayAnswerModel AnswerModelFromData(string data)
        {
            string decodedData = System.Text.Encoding.UTF8.GetString(Convert.FromBase64String(data));
            var settings = new JsonSerializerSettings();
            settings.ContractResolver = new LowercaseContractResolver();
            settings.NullValueHandling = NullValueHandling.Ignore;
            LiqPayAnswerModel model = JsonConvert.DeserializeObject<LiqPayAnswerModel>(decodedData, settings);
            return model;
        }

        public bool CheckDataBySignature(string data, string signature, string private_key)
        {
            string serverSignature = this.CreateSignature(data, private_key);
            return serverSignature.Equals(signature);
        }

        public (string data, string signature) EncryptLiqPay(LiqPayCheckoutModel model)
        {
            string data = this.CreateData(model);
            string signature = this.CreateSignature(data, model.Private_Key);
            return (data, signature);

        }

        private string CreateData(LiqPayCheckoutModel model)
        {
            var settings = new JsonSerializerSettings();
            settings.ContractResolver = new LowercaseContractResolver();
            settings.NullValueHandling = NullValueHandling.Ignore;
            string jsonString = JsonConvert.SerializeObject(model, Formatting.None, settings);
            string data = Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(jsonString));
            return data;
        }

        private string CreateSignature(string data, string private_key)
        {
            string signString = private_key + data + private_key;
            byte[] signStringBytes = System.Text.Encoding.UTF8.GetBytes(signString);
            using (var sha = System.Security.Cryptography.SHA1.Create())
            {
                var hash = sha.ComputeHash(signStringBytes);
                string signature = Convert.ToBase64String(hash);
                return signature;
            }
        }
    }
}