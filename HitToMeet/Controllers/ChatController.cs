using AutoMapper;
using HitToMeet.API.Requests.Chat;
using HitToMeet.API.Responses.Chat;
using HitToMeet.API.Routes;
using HitToMeet.API.ViewModels.Chat;
using HitToMeet.BL.Contracts.Chat;
using HitToMeet.BL.Interfaces;
using HitToMeet.Core.Resources;
using HitToMeet.Filters.ActionFilters;
using HitToMeet.Filters.ExceptionFilters;
using HitToMeet.Hubs.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace HitToMeet.Controllers
{
    [ApiController]
    [ModelValidation]
    [ServiceFilter(typeof(HitToMeetExceptionsFilterAttribute))]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ChatController : ControllerBase
    {
        private readonly IMapper mapper;

        private readonly IChatHubService hubService;

        private readonly IChatService chatService;

        public ChatController(IMapper mapper, IChatHubService hubService, IChatService chatService)
        {
            this.mapper = mapper;
            this.hubService = hubService;
            this.chatService = chatService;
        }

        [HttpGet(DefaultRoutes.Chats.Get)]
        public async Task<IActionResult> Get()  // TODO: Look BL
        {
            return Ok();
        }

        [HttpPatch(DefaultRoutes.Chats.BanChat)]
        public async Task<IActionResult> BanChat(int chatId)
        {
            var userId = this.User.Claims.First(c => c.Type == StringConstants.JwtClaimId).Value;
            await chatService.BanChat(chatId, userId);
            return Ok();
        }

        [HttpGet(DefaultRoutes.Chats.GetChat)]
        public async Task<IActionResult> GetChat(int chatId)
        {
            var userId = this.User.Claims.First(c => c.Type == StringConstants.JwtClaimId).Value;
            var result = await chatService.GetChat(chatId, userId);
            return Ok(mapper.Map<ChatResponse>(result));
        }

        [HttpPut(DefaultRoutes.Chats.CreateChat)]
        public async Task<IActionResult> CreateChat(string acceptorId)
        {
            var userId = this.User.Claims.First(c => c.Type == StringConstants.JwtClaimId).Value;
            var result = await chatService.CreateChat(userId, acceptorId);
            return Ok(mapper.Map<ChatResponse>(result));

        }

        [HttpPost(DefaultRoutes.Chats.SendMessage)]
        public async Task<IActionResult> SendMessage(int chatId, [FromBody]SendMessageRequest request)
        {
            var userId = this.User.Claims.First(c => c.Type == StringConstants.JwtClaimId).Value;
            NewMessageContract contract = mapper.Map<NewMessageContract>(request);
            contract.ChatId = chatId;
            contract.SenderId = userId;
            var messageModel = await chatService.SendMessage(contract);
            await hubService.SendMessage(userId, mapper.Map<MessageViewModel>(messageModel));
            return Ok();
        }
    }
}
