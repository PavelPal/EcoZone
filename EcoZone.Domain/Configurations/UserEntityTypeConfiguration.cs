using System.Data.Entity.ModelConfiguration;
using EcoZone.Domain.Models;

namespace EcoZone.Domain.Configurations
{
    public class UserEntityTypeConfiguration : EntityTypeConfiguration<User>
    {
        public UserEntityTypeConfiguration()
        {
            HasKey(x => x.Id);
            HasMany(x => x.Roles).WithRequired().HasForeignKey(x => x.UserId);
            HasMany(x => x.Logins).WithRequired().HasForeignKey(x => x.UserId);
            HasMany(x => x.Claims).WithRequired().HasForeignKey(x => x.UserId);
            HasOptional(x => x.PendingData).WithMany().HasForeignKey(x => x.PendingDataId);
        }
    }
}