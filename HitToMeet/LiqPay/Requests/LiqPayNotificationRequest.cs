namespace HitToMeet.LiqPay.Requests
{
    using System.ComponentModel.DataAnnotations;

    public class LiqPayNotificationRequest
    {
        [Required]
        public string Data { get; set; }

        [Required]
        public string Signature { get; set; }
    }
}