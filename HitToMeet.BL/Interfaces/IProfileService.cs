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
    }
}
