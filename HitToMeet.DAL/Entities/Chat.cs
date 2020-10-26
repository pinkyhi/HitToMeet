using HitToMeet.DAL.Entities.BaseEntities;

namespace HitToMeet.DAL.Entities
{
    public class Chat : BaseEntity
    {
        public string InitiatorId { get; set; }

        public string AccepterId { get; set; }

        public int ChatStatus { get; set; }

        public User Initiator { get; set; }

        public User Accepter { get; set; }
    }
}
