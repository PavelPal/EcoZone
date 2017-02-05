using System;
using EcoZone.Domain.Models;

namespace EcoZone.Models
{
    public class ArticleViewModel
    {
        public ArticleViewModel()
        {
        }

        public ArticleViewModel(Article article)
        {
            Id = article.Id;
            Title = article.Title;
            Description = article.Description;
            Source = article.Source;
            ImagePath = article.ImagePath;
            Views = article.Views;
            Likes = article.Likes.Count;
            Date = article.Date;
            IsApproved = article.IsApproved;
        }

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

    public class CreateArticleViewModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Source { get; set; }
        public string ImagePath { get; set; }
    }
}