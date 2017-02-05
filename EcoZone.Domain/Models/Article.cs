using System;
using System.Collections.Generic;

namespace EcoZone.Domain.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Source { get; set; }
        public string ImagePath { get; set; }
        public int Views { get; set; } = 0;
        public DateTime Date { get; set; } = DateTime.Now;
        public bool IsApproved { get; set; } = false;

        public User User { get; set; }
        public string UserId { get; set; }
        public Article PendingArticle { get; set; }
        public int? PendingArticleId { get; set; }

        public ICollection<Tag> Tags { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Like> Likes { get; set; }
    }
}