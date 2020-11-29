using System;
using System.Collections.Generic;
using System.Text;

namespace HitToMeet.BL.Contracts.User
{
    public class UpdateUserProfileContract
    {
        public string Description { get; set; }

        public int? Sex { get; set; }

        public int? PickedSkin { get; set; }
    }
}
