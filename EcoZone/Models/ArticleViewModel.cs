using System;
using EcoZone.Domain.Models;

namespace EcoZone.Models
{
    public class ArticleViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Source { get; set; }
        public string ImagePath { get; set; }
        public int Views { get; set; }
        public int Likes { get; set; }
        public DateTime Date { get; set; }
        public bool IsApproved { get; set; }
    }

    public class ArticleInfoViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
        public int Views { get; set; }
        public int Comments { get; set; }
        public DateTime Date { get; set; }
    }

    public class CreateArticleViewModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Source { get; set; }
        public string ImagePath { get; set; }

        public Article MapToArticle()
        {
            return new Article
            {
                Title = this.Title,
                Description = this.Description,
                Source = this.Source,
                ImagePath = this.ImagePath
            };
        }
    }
}