using AutoMapper;
using HitToMeet.BL.Interfaces;
using HitToMeet.BL.Results;
using HitToMeet.DAL.Entities;
using HitToMeet.DAL.Interfaces;
using HitToMeet.DAL.Managers;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HitToMeet.BL.Services
{
    public class ProfileService : IProfileService
    {
        private readonly UserManager userManager;
        private readonly IMapper mapper;

        public ProfileService(UserManager userManager, IMapper mapper)
        {
            this.userManager = userManager;
            this.mapper = mapper;
        }

        public async Task<UserProfileResult> GetUserProfile(string userId)
        {
            User user = await this.userManager.FindProfileByIdAsync(userId);
            return mapper.Map<UserProfileResult>(user);
        }
    }
}
