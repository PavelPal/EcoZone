using System.Data.Entity.ModelConfiguration;
using EcoZone.Domain.Models;

namespace EcoZone.Domain.Configurations
{
    public class ArticleEntityTypeConfiguration : EntityTypeConfiguration<Article>
    {
        public ArticleEntityTypeConfiguration()
        {
            HasKey(x => x.Id);
            HasRequired(x => x.User).WithMany(x => x.Articles).HasForeignKey(x => x.UserId);
            HasOptional(x => x.PendingArticle).WithMany().HasForeignKey(x => x.PendingArticleId);
        }
    }
}