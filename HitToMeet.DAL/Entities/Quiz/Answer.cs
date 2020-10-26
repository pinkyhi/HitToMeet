using HitToMeet.DAL.Entities.BaseEntities;

namespace HitToMeet.DAL.Entities.Quiz
{
    public class Answer : BaseEntity
    {
        public int Points { get; set; }

        public string Title { get; set; }
    }
}
