using System.Data.Entity.ModelConfiguration;
using EcoZone.Domain.Models;

namespace EcoZone.Domain.Configurations
{
    public class LikeEntityTypeConfiguration : EntityTypeConfiguration<Like>
    {
        public LikeEntityTypeConfiguration()
        {
            HasKey(x => x.Id);
            HasRequired(x => x.User).WithMany(x => x.Likes).HasForeignKey(x => x.UserId);
            HasRequired(x => x.Article)
                .WithMany(x => x.Likes)
                .HasForeignKey(x => x.ArticleId)
                .WillCascadeOnDelete(false);
        }
    }
}