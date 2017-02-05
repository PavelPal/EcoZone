using System.Data.Entity.ModelConfiguration;
using EcoZone.Domain.Model;

namespace EcoZone.Domain.Configurations
{
    public class TagEntityTypeConfiguration : EntityTypeConfiguration<Tag>
    {
        public TagEntityTypeConfiguration()
        {
            HasKey(x => x.Id);
        }
    }
}