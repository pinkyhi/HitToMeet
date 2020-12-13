using AutoMapper;
using HitToMeet.BL.Contracts.Chat;
using HitToMeet.BL.Interfaces;
using HitToMeet.BL.Models.Chat;
using HitToMeet.BL.Results.Chat;
using HitToMeet.Core.Enums;
using HitToMeet.Core.Exceptions.Chat;
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
    public class ChatService : IChatService
    {
        private readonly UserManager userManager;
        private readonly IRepository repository;
        private readonly IMapper mapper;

        public ChatService(UserManager userManager, IMapper mapper, IRepository repository)
        {
            this.userManager = userManager;
            this.mapper = mapper;
            this.repository = repository;
        }

        public async Task BanChat(int chatId, string userId)
        {
            Chat existed = await repository.GetAsync<Chat>(true, c => c.Id == chatId, c => c.Initiator, c => c.Acceptor, c => c.Messages);
            if (existed != null && (existed.AcceptorId.Equals(userId) || existed.InitiatorId.Equals(userId))){
                existed.ChatStatus = (int)ChatStatuses.Banned;
                await repository.UpdateAsync(existed);
            }
            else
            {
                throw new ChatNotFoundException();
            }
        }

        public async Task<ChatResult> CreateChat(string initiatorId, string acceptorId)
        {
            Chat existed = await repository.GetAsync<Chat>(false, c => c.InitiatorId.Equals(initiatorId) && c.AcceptorId.Equals(acceptorId) || c.InitiatorId.Equals(acceptorId) && c.AcceptorId.Equals(initiatorId));
            if (existed == null)
            {
                Chat newChat = new Chat()
                {
                    InitiatorId = initiatorId,
                    AcceptorId = acceptorId
                };
                newChat = await repository.AddAsync(newChat);
                newChat = await repository.GetAsync<Chat>(false, c => c.Id == newChat.Id, c => c.Initiator, c => c.Acceptor);
                return mapper.Map<ChatResult>(newChat);
            }
            else
            {
                throw new ChatAlreadyExistsException();
            }
        }

        public async Task<ChatResult> GetChat(int chatId, string userId)
        {
            Chat existed = await repository.GetAsync<Chat>(false, c => c.Id == chatId, c => c.Initiator, c => c.Acceptor, c => c.Messages, c => c.Initiator.UserSkins, c => c.Acceptor.UserSkins);
            if(existed != null && (existed.AcceptorId.Equals(userId) || existed.InitiatorId.Equals(userId))){
                return mapper.Map<ChatResult>(existed);
            }
            else
            {
                throw new ChatNotFoundException();
            }
        }

        public async Task<IEnumerable<ChatElementModel>> GetChatElements(string userId)
        {
            var result = await repository.GetRangeAsync<Chat>(false, c => c.AcceptorId.Equals(userId), c => c.Messages, c => c.Initiator, c => c.Acceptor);     // TODO: Skin doesn't load, and userId too: CreateMap<Chat, ChatElementModel>()
            return result.Select(c => mapper.Map<ChatElementModel>(c));
        }

        public async Task<MessageModel> SendMessage(NewMessageContract contract)
        {
            Message newMessage = mapper.Map<Message>(contract);
            newMessage.Date = DateTime.Now;
            newMessage = await repository.AddAsync(newMessage);
            return mapper.Map<MessageModel>(newMessage);
        }
    }
}
