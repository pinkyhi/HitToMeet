using HitToMeet.DAL.Entities.BaseEntities;

namespace HitToMeet.DAL.Entities.Quiz
{
    public class Question : BaseEntity
    {
        public string Text { get; set; }
        
        public string QuestionType { get; set; }
    }
}
