using AutoMapper;
using HitToMeet.API.Responses;
using HitToMeet.BL.Models.Chat;
using HitToMeet.Core.Enums;
using HitToMeet.DAL.Entities;
using HitToMeet.WebServices.Results;
using System.Linq;

namespace HitToMeet.Mappers
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            this.CreateMap<AuthentificationResult, AuthSuccessResponse>();
            this.CreateMap<User, ChatUserModel>()
                .ForMember(c => c.Skin, o => o.MapFrom(u => u.UserSkins.FirstOrDefault(us => us.SkinStatus == (int)UserSkinStatuses.DefaultStatuses.Equiped).Skin));
        }
    }
}
