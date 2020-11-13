using AutoMapper;
using HitToMeet.API.ViewModels.Quiz;
using HitToMit.BL.Results;
using System.Collections.Generic;

namespace HitToMeet.API.Responses.Quiz
{
    [AutoMap(typeof(QuizResult), ReverseMap = true)]
    public class QuizResponse
    {
        public IEnumerable<QuestionViewModel> Questions { get; set; }
    }
}
