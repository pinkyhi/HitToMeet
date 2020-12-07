namespace HitToMeet.LiqPay.Responses
{
    using System.ComponentModel.DataAnnotations;

    public class LiqPayTupleResponse
    {
        [Required]
        public string Data { get; set; }

        [Required]
        public string Signature { get; set; }
    }
}