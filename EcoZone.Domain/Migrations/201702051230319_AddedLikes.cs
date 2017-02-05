using System.Data.Entity.Migrations;

namespace EcoZone.Domain.Migrations
{
    public partial class AddedLikes : DbMigration
    {
        public override void Up()
        {
            RenameTable("dbo.AspNetUsers", "Users");
            DropForeignKey("dbo.Articles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.Comments", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.Comments", "ArticleId", "dbo.Articles");
            DropIndex("dbo.Users", "UserNameIndex");
            DropIndex("dbo.Articles", new[] {"UserId"});
            DropIndex("dbo.Articles", new[] {"PendingArticleId"});
            DropIndex("dbo.Comments", new[] {"UserId"});
            DropIndex("dbo.AspNetUserClaims", new[] {"UserId"});
            CreateTable(
                    "dbo.Likes",
                    c => new
                    {
                        Id = c.Int(false, true),
                        UserId = c.String(false, 128),
                        ArticleId = c.Int(false)
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Articles", t => t.ArticleId)
                .ForeignKey("dbo.Users", t => t.UserId, true)
                .Index(t => t.UserId)
                .Index(t => t.ArticleId);

            AlterColumn("dbo.Users", "Email", c => c.String());
            AlterColumn("dbo.Users", "UserName", c => c.String());
            AlterColumn("dbo.Articles", "UserId", c => c.String(false, 128));
            AlterColumn("dbo.Articles", "PendingArticleId", c => c.Int());
            AlterColumn("dbo.Comments", "UserId", c => c.String(false, 128));
            AlterColumn("dbo.AspNetUserClaims", "UserId", c => c.String(maxLength: 128));
            CreateIndex("dbo.Articles", "UserId");
            CreateIndex("dbo.Articles", "PendingArticleId");
            CreateIndex("dbo.Comments", "UserId");
            CreateIndex("dbo.AspNetUserClaims", "UserId");
            AddForeignKey("dbo.Articles", "UserId", "dbo.Users", "Id", true);
            AddForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.Users", "Id");
            AddForeignKey("dbo.Comments", "UserId", "dbo.Users", "Id", true);
            AddForeignKey("dbo.Comments", "ArticleId", "dbo.Articles", "Id");
        }

        public override void Down()
        {
            DropForeignKey("dbo.Comments", "ArticleId", "dbo.Articles");
            DropForeignKey("dbo.Comments", "UserId", "dbo.Users");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.Users");
            DropForeignKey("dbo.Articles", "UserId", "dbo.Users");
            DropForeignKey("dbo.Likes", "UserId", "dbo.Users");
            DropForeignKey("dbo.Likes", "ArticleId", "dbo.Articles");
            DropIndex("dbo.Likes", new[] {"ArticleId"});
            DropIndex("dbo.Likes", new[] {"UserId"});
            DropIndex("dbo.AspNetUserClaims", new[] {"UserId"});
            DropIndex("dbo.Comments", new[] {"UserId"});
            DropIndex("dbo.Articles", new[] {"PendingArticleId"});
            DropIndex("dbo.Articles", new[] {"UserId"});
            AlterColumn("dbo.AspNetUserClaims", "UserId", c => c.String(false, 128));
            AlterColumn("dbo.Comments", "UserId", c => c.String(maxLength: 128));
            AlterColumn("dbo.Articles", "PendingArticleId", c => c.Int(false));
            AlterColumn("dbo.Articles", "UserId", c => c.String(maxLength: 128));
            AlterColumn("dbo.Users", "UserName", c => c.String(false, 256));
            AlterColumn("dbo.Users", "Email", c => c.String(maxLength: 256));
            DropTable("dbo.Likes");
            CreateIndex("dbo.AspNetUserClaims", "UserId");
            CreateIndex("dbo.Comments", "UserId");
            CreateIndex("dbo.Articles", "PendingArticleId");
            CreateIndex("dbo.Articles", "UserId");
            CreateIndex("dbo.Users", "UserName", true, "UserNameIndex");
            AddForeignKey("dbo.Comments", "ArticleId", "dbo.Articles", "Id", true);
            AddForeignKey("dbo.Comments", "UserId", "dbo.AspNetUsers", "Id");
            AddForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers", "Id", true);
            AddForeignKey("dbo.Articles", "UserId", "dbo.AspNetUsers", "Id");
            RenameTable("dbo.Users", "AspNetUsers");
        }
    }
}