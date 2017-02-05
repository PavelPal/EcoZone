using System.Data.Entity;
using EcoZone.Domain.Model;
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

        //public DbSet<Tag> Tags { get; set; }

        public static EcoZoneDbContext Create()
        {
            return new EcoZoneDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Configurations.Add(new TagEntityTypeConfiguration());
        }
    }
}