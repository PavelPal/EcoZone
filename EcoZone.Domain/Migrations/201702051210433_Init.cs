using System.Data.Entity.Migrations;

namespace EcoZone.Domain.Migrations
{
    public partial class Init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                    "dbo.AspNetRoles",
                    c => new
                    {
                        Id = c.String(false, 128),
                        Name = c.String(false, 256)
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");

            CreateTable(
                    "dbo.AspNetUserRoles",
                    c => new
                    {
                        UserId = c.String(false, 128),
                        RoleId = c.String(false, 128)
                    })
                .PrimaryKey(t => new {t.UserId, t.RoleId})
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);

            CreateTable(
                    "dbo.AspNetUsers",
                    c => new
                    {
                        Id = c.String(false, 128),
                        FirstName = c.String(),
                        LastName = c.String(),
                        PhotoPath = c.String(),
                        Approved = c.Boolean(false),
                        PendingDataId = c.String(maxLength: 128),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(false),
                        TwoFactorEnabled = c.Boolean(false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(false),
                        AccessFailedCount = c.Int(false),
                        UserName = c.String(false, 256)
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.PendingDataId)
                .Index(t => t.PendingDataId)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");

            CreateTable(
                    "dbo.Articles",
                    c => new
                    {
                        Id = c.Int(false, true),
                        Title = c.String(),
                        Description = c.String(),
                        Source = c.String(),
                        ImagePath = c.String(),
                        Views = c.Int(false),
                        Date = c.DateTime(false),
                        IsApproved = c.Boolean(false),
                        UserId = c.String(maxLength: 128),
                        PendingArticleId = c.Int(false)
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Articles", t => t.PendingArticleId)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.PendingArticleId);

            CreateTable(
                    "dbo.Comments",
                    c => new
                    {
                        Id = c.Int(false, true),
                        Date = c.DateTime(false),
                        Body = c.String(),
                        UserId = c.String(maxLength: 128),
                        ArticleId = c.Int(false)
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Articles", t => t.ArticleId, true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.ArticleId);

            CreateTable(
                    "dbo.Tags",
                    c => new
                    {
                        Id = c.Int(false, true),
                        Name = c.String()
                    })
                .PrimaryKey(t => t.Id);

            CreateTable(
                    "dbo.AspNetUserClaims",
                    c => new
                    {
                        Id = c.Int(false, true),
                        UserId = c.String(false, 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String()
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, true)
                .Index(t => t.UserId);

            CreateTable(
                    "dbo.AspNetUserLogins",
                    c => new
                    {
                        LoginProvider = c.String(false, 128),
                        ProviderKey = c.String(false, 128),
                        UserId = c.String(false, 128)
                    })
                .PrimaryKey(t => new {t.LoginProvider, t.ProviderKey, t.UserId})
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, true)
                .Index(t => t.UserId);

            CreateTable(
                    "dbo.TagArticles",
                    c => new
                    {
                        Tag_Id = c.Int(false),
                        Article_Id = c.Int(false)
                    })
                .PrimaryKey(t => new {t.Tag_Id, t.Article_Id})
                .ForeignKey("dbo.Tags", t => t.Tag_Id, true)
                .ForeignKey("dbo.Articles", t => t.Article_Id, true)
                .Index(t => t.Tag_Id)
                .Index(t => t.Article_Id);
        }

        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUsers", "PendingDataId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.Articles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.TagArticles", "Article_Id", "dbo.Articles");
            DropForeignKey("dbo.TagArticles", "Tag_Id", "dbo.Tags");
            DropForeignKey("dbo.Articles", "PendingArticleId", "dbo.Articles");
            DropForeignKey("dbo.Comments", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.Comments", "ArticleId", "dbo.Articles");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropIndex("dbo.TagArticles", new[] {"Article_Id"});
            DropIndex("dbo.TagArticles", new[] {"Tag_Id"});
            DropIndex("dbo.AspNetUserLogins", new[] {"UserId"});
            DropIndex("dbo.AspNetUserClaims", new[] {"UserId"});
            DropIndex("dbo.Comments", new[] {"ArticleId"});
            DropIndex("dbo.Comments", new[] {"UserId"});
            DropIndex("dbo.Articles", new[] {"PendingArticleId"});
            DropIndex("dbo.Articles", new[] {"UserId"});
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUsers", new[] {"PendingDataId"});
            DropIndex("dbo.AspNetUserRoles", new[] {"RoleId"});
            DropIndex("dbo.AspNetUserRoles", new[] {"UserId"});
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropTable("dbo.TagArticles");
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.Tags");
            DropTable("dbo.Comments");
            DropTable("dbo.Articles");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetRoles");
        }
    }
}