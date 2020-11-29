using AutoMapper;
using HitToMeet.BL.Contracts.User;
using HitToMeet.BL.Interfaces;
using HitToMeet.BL.Results;
using HitToMeet.Core.Enums;
using HitToMeet.Core.Exceptions.User;
using HitToMeet.DAL.Entities;
using HitToMeet.DAL.Interfaces;
using HitToMeet.DAL.Managers;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<UserProfileResult> UpdateUserProfile(string userId, UpdateUserProfileContract contract)
        {
            User user = await this.userManager.FindProfileByIdAsync(userId);
            if (contract.Sex != null)
            {
                user.Sex = (int) contract.Sex;
            }
            if (contract.Description != null)
            {
                user.Description = (string)contract.Description;
            }
            if (contract.PickedSkin != null)
            {
                var userSkins = user.UserSkins.ToList();
                var skin = userSkins.FirstOrDefault(u => u.SkinId == contract.PickedSkin);
                if (skin!= null)
                {
                    for (int i = 0; i < userSkins.Count; i++)
                    {
                        if (userSkins[i].SkinStatus == (int)UserSkinStatuses.DefaultStatuses.Equiped)
                        {
                            userSkins[i].SkinStatus = (int)UserSkinStatuses.DefaultStatuses.Default;
                        }
                    }
                }
                else
                {
                    throw new SkinNotFoundException("Such skin not found");
                }

                skin.SkinStatus = (int)UserSkinStatuses.DefaultStatuses.Equiped;
                user.UserSkins = userSkins;
            }
            await userManager.UpdateAsync(user);
            return mapper.Map<UserProfileResult>(user);
        }
    }
}
