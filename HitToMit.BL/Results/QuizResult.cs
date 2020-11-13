using HitToMit.BL.Models.Quiz;
using System.Collections.Generic;

namespace HitToMit.BL.Results
{
    public class QuizResult
    {
        public IEnumerable<QuestionModel> Questions { get; set; }
    }
}
