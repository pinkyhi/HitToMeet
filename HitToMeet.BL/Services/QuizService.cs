using AutoMapper;
using HitToMeet.DAL.Entities;
using HitToMeet.DAL.Entities.Quiz;
using HitToMeet.DAL.Interfaces;
using HitToMeet.DAL.Managers;
using HitToMeet.BL.Interfaces;
using HitToMeet.BL.Models.Quiz;
using HitToMeet.BL.Results;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.BL.Services
{
    public class QuizService : IQuizService
    {
        private readonly UserManager userManager;
        private readonly IRepository repository;
        private readonly IMapper mapper;

        public QuizService(IRepository repository, UserManager userManager, IMapper mapper)
        {
            this.repository = repository;
            this.userManager = userManager;
            this.mapper = mapper;
        }

        public async Task<bool> HasAnimal(string userId)
        {
            User user = await this.userManager.FindByIdAsync(userId);
            return user.AnimalId != null;
        }

        public async Task ClearAnimal(string userId)
        {
            User user = await this.userManager.FindByIdAsync(userId);
            user.AnimalId = null;
            await userManager.UpdateAsync(user);
        }

        public async Task AddAnimalToUser(string userId, int animalId)
        {
            User user = await this.userManager.FindByIdAsync(userId);
            user.AnimalId = animalId;
            int standartSkinId = 0;
            switch(animalId)
            {
                case 1:
                    standartSkinId = 1;
                    break;
                case 2:
                    standartSkinId = 13;
                    break;
                case 4:
                    standartSkinId = 14;
                    break;
                case 5:
                    standartSkinId = 15;
                    break;
                case 6:
                    standartSkinId = 16;
                    break;
                case 7:
                    standartSkinId = 17;
                    break;
                case 8:
                    standartSkinId = 18;
                    break;
                case 9:
                    standartSkinId = 19;
                    break;
                case 10:
                    standartSkinId = 20;
                    break;
                case 11:
                    standartSkinId = 25;
                    break;
                case 12:
                    standartSkinId = 26;
                    break;
                case 13:
                    standartSkinId = 27;
                    break;
                case 14:
                    standartSkinId = 33;
                    break;
            }
            UserSkin newSkin = new UserSkin();
            newSkin.SkinId = standartSkinId;
            newSkin.User = user;
            newSkin.SkinStatus = 1;

            await repository.AddAsync<UserSkin>(newSkin);
            await userManager.UpdateAsync(user);
        }

        public async Task<QuizResult> GetQuiz()
        {
            IEnumerable<Question> questions = await this.repository.GetRangeAsync<Question>(false, q => true, q => q.Answers);
            IEnumerable<QuestionModel> qModels = questions.Select(q => this.mapper.Map<QuestionModel>(q));
            return new QuizResult { Questions = qModels };          
        }
    }
}
