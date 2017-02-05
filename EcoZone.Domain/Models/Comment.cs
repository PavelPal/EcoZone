using System;

namespace EcoZone.Domain.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        public string Body { get; set; }

        public User User { get; set; }
        public string UserId { get; set; }
        public Article Article { get; set; }
        public int ArticleId { get; set; }
    }
}