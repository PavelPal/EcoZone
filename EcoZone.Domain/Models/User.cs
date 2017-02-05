using System.Collections.Generic;
using Microsoft.AspNet.Identity.EntityFramework;

namespace EcoZone.Domain.Models
{
    public class User : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhotoPath { get; set; }
        public bool Approved { get; set; } = false;

        public User PendingData { get; set; }
        public string PendingDataId { get; set; }

        public ICollection<Article> Articles { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Like> Likes { get; set; }
    }
}