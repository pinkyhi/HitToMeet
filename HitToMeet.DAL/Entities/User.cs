using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace HitToMeet.DAL.Entities
{
    public class User : IdentityUser
    {
        [Required]
        public DateTime RegistrationDate { get; set; }

        public int AnimalId { get; set; }

        public string Description { get; set; }

        public int Sex { get; set; }

        public int PointsBalance { get; set; }

        public int Balance { get; set; }
    }
}
