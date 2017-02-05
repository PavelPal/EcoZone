using System.Data.Entity.ModelConfiguration;
using EcoZone.Domain.Models;

namespace EcoZone.Domain.Configurations
{
    public class UserEntityTypeConfiguration : EntityTypeConfiguration<User>
    {
        public UserEntityTypeConfiguration()
        {
            HasOptional(x => x.PendingData).WithMany().HasForeignKey(x => x.PendingDataId);
        }
    }
}