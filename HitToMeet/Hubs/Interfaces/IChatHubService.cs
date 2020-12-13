using HitToMeet.API.ViewModels.Chat;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HitToMeet.Hubs.Interfaces
{
    public interface IChatHubService
    {
        public Task SendMessage(string userId, MessageViewModel message);
    }
}
