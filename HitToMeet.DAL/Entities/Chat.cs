using HitToMeet.DAL.Entities.BaseEntities;
using System.Collections.Generic;

namespace HitToMeet.DAL.Entities
{
    public class Chat : BaseEntity
    {
        public string InitiatorId { get; set; }

        public string AcceptorId { get; set; }

        public int ChatStatus { get; set; }

        public User Initiator { get; set; }

        public User Acceptor { get; set; }

        public IEnumerable<Message> Messages { get; set; }
    }
}
