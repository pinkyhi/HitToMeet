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
            return Ok(user);
        }
        /*
        [HttpPost((API.Routes.DefaultRoutes.Profile.SetProfile))]
        public async Task<IActionResult> SetProfile()
        {
            var userId = this.User.Claims.First(c => c.Type == StringConstants.JwtClaimId).Value;
            var skins = await this.casinoService.GetAvailableSkinsForUser(userId);
            return Ok(skins.Select(s => mapper.Map<SkinViewModel>(s)));
        }
        */
    }
}
