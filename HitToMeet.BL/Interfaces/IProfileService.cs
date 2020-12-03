using HitToMeet.BL.Contracts.User;
using HitToMeet.BL.Results;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HitToMeet.BL.Interfaces
{
    public interface IProfileService
    {
        public Task<UserProfileResult> GetUserProfile(string userId);

        public Task<UserProfileResult> UpdateUserProfile(string userId, UpdateUserProfileContract contract);
    }
}
