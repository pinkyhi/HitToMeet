namespace HitToMeet.API.Routes
{
    public class DefaultRoutes
    {
        public const string Root = "api";

        public const string Version = "v0";

        public const string Base = Root + "/" + Version;

        public static class Identity
        {
            public const string Login = Base + "/identity/login";

            public const string Register = Base + "/identity/register";

            public const string Logout = Base + "/identity/logout";

            public const string RefreshToken = Base + "/identity/refreshToken";
        }

        public static class Quiz
        {
            public const string QuizPath = Base + "/quiz";
        }

        public static class Casino
        {
            public const string GetAvailableSkins = Base + "/casino";
        }

        public static class Profile
        {
            public const string GetProfile = Base + "/profile";
            public const string UpdateProfile = Base + "/profile";
        }

        public static class LiqPay
        {
            public const string LiqPayRedirect = Base + "/liqPay";
            public const string LiqPayNotifications = Base + "/liqpay/notifications";
        }

        public static class Chats
        {
            public const string Get = Base + "/chats";
            public const string SendMessage = Base + "/chats/{chatId}";
            public const string GetChat = Base + "/chats/{chatId}";
            public const string BanChat = Base + "/chats/{chatId}";
            public const string CreateChat = Base + "/chats/{acceptorId}";
        }
    }
}
