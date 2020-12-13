using HitToMeet.API.ViewModels.Chat;
using HitToMeet.DAL.Entities;
using HitToMeet.Hubs.Interfaces;
using HitToMeet.Hubs.Resources;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.Hubs.Service
{
    public class ChatHubService : IChatHubService
    {
        private readonly IHubContext<ChatHub> hubContext;

        public ChatHubService(IHubContext<ChatHub> hubContext)
        {
            this.hubContext = hubContext;
        }

        public Task SendMessage(string userId, MessageViewModel message)
        {
            return hubContext.Clients.User(userId).SendAsync(ChatHubIdentifiers.NewMessage, message);
        }

    }
}
