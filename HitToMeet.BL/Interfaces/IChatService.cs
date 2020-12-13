using HitToMeet.BL.Contracts.Chat;
using HitToMeet.BL.Models.Chat;
using HitToMeet.BL.Results.Chat;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HitToMeet.BL.Interfaces
{
    public interface IChatService
    {
        public Task<IEnumerable<ChatElementModel>> GetChatElements(string userId);

        public Task<ChatResult> GetChat(int chatId, string userId);

        public Task<ChatResult> CreateChat(string initiatorId, string acceptorId);

        public Task<MessageModel> SendMessage(NewMessageContract contract);

        public Task BanChat(int chatId, string userId);
    }
}
