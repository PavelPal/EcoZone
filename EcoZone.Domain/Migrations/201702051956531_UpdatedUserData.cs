using System.Data.Entity.Migrations;

namespace EcoZone.Domain.Migrations
{
    public partial class UpdatedUserData : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.Users");
            DropIndex("dbo.AspNetUserClaims", new[] {"UserId"});
            AlterColumn("dbo.AspNetUserClaims", "UserId", c => c.String(false, 128));
            CreateIndex("dbo.AspNetUserClaims", "UserId");
            AddForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.Users", "Id", true);
        }

        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.Users");
            DropIndex("dbo.AspNetUserClaims", new[] {"UserId"});
            AlterColumn("dbo.AspNetUserClaims", "UserId", c => c.String(maxLength: 128));
            CreateIndex("dbo.AspNetUserClaims", "UserId");
            AddForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.Users", "Id");
        }
    }
}