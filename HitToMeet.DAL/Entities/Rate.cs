using HitToMeet.DAL.Entities.BaseEntities;

namespace HitToMeet.DAL.Entities
{
    public class Rate : BaseDto
    {
        public string SenderId { get; set; }

        public string AcceptorId { get; set; }

        public int Points { get; set; }

        public User Sender { get; set; }

        public User Acceptor { get; set; }
    }
}
