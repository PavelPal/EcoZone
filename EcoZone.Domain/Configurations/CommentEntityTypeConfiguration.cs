using System.Data.Entity.ModelConfiguration;
using EcoZone.Domain.Models;

namespace EcoZone.Domain.Configurations
{
    public class CommentEntityTypeConfiguration : EntityTypeConfiguration<Comment>
    {
        public CommentEntityTypeConfiguration()
        {
            HasKey(x => x.Id);
            HasRequired(x => x.User).WithMany(x => x.Comments).HasForeignKey(x => x.UserId);
            HasRequired(x => x.Article)
                .WithMany(x => x.Comments)
                .HasForeignKey(x => x.ArticleId)
                .WillCascadeOnDelete(false);
        }
    }
}