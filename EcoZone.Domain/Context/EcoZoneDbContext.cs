using System.Data.Entity;
using EcoZone.Domain.Configurations;
using EcoZone.Domain.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace EcoZone.Domain.Context
{
    public class EcoZoneDbContext : IdentityDbContext<User>
    {
        public EcoZoneDbContext() : base("EcoZoneDb", false)
        {
            Configuration.LazyLoadingEnabled = true;
            Configuration.ProxyCreationEnabled = true;
        }

        public DbSet<Article> Articles { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Tag> Tags { get; set; }

        public static EcoZoneDbContext Create()
        {
            return new EcoZoneDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Configurations.Add(new ArticleEntityTypeConfiguration());
            modelBuilder.Configurations.Add(new CommentEntityTypeConfiguration());
            modelBuilder.Configurations.Add(new LikeEntityTypeConfiguration());
            modelBuilder.Configurations.Add(new TagEntityTypeConfiguration());
            modelBuilder.Configurations.Add(new UserEntityTypeConfiguration());
        }
    }
}