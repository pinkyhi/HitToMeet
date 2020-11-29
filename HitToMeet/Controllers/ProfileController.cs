using AutoMapper;
using HitToMeet.API.Responses.Quiz;
using HitToMeet.Core.Exceptions.Quiz;
using HitToMeet.Core.Resources;
using HitToMeet.Filters.ActionFilters;
using HitToMeet.Filters.ExceptionFilters;
using HitToMeet.BL.Interfaces;
using HitToMeet.BL.Results;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using HitToMeet.API.ViewModels.Skin;
using HitToMeet.API.Responses.User;
using HitToMeet.API.Requests.User;
using HitToMeet.BL.Contracts.User;

namespace HitToMeet.Controllers
{
    public class ProfileController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly IProfileService profileService;
        public ProfileController(IMapper mapper, IProfileService profileService)
        {
            this.mapper = mapper;
            this.profileService = profileService;
        }

        [HttpGet((API.Routes.DefaultRoutes.Profile.GetProfile))]
        public async Task<IActionResult> GetProfile()
        {
            var userId = this.User.Claims.First(c => c.Type == StringConstants.JwtClaimId).Value;
            var user = await profileService.GetUserProfile(userId);
            return Ok(mapper.Map<UserProfileResponse>(user));
        }
        
        [HttpPost((API.Routes.DefaultRoutes.Profile.UpdateProfile))]
        public async Task<IActionResult> UpdateProfile([FromBody]UpdateUserProfileRequest request)
        {
            var userId = this.User.Claims.First(c => c.Type == StringConstants.JwtClaimId).Value;
            UpdateUserProfileContract contract = mapper.Map<UpdateUserProfileContract>(request);
            await profileService.UpdateUserProfile(userId, contract);
            return Ok();
        }
        
    }
}
