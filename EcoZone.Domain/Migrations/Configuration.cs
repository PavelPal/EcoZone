using System;
using System.Data.Entity.Migrations;
using System.Linq;
using EcoZone.Domain.Context;
using EcoZone.Domain.Helpers;
using EcoZone.Domain.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace EcoZone.Domain.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<EcoZoneDbContext>
    {
        public Configuration()
        {
            this.AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(EcoZoneDbContext context)
        {
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
            if (!context.Roles.Any())
            {
                var roles = Enum.GetValues(typeof(Roles)).Cast<Roles>().Select(x => new IdentityRole(x.ToString()));

                foreach (var role in roles)
                    roleManager.Create(role);
            }

            var UserManager = new UserManager<User>(new UserStore<User>(context));
            var PasswordHash = new PasswordHasher();
            User user;
            if (!context.Users.Any(u => u.UserName == "admin@admin.com"))
            {
                user = new User
                {
                    UserName = "admin@admin.com",
                    Email = "admin@admin.com",
                    PasswordHash = PasswordHash.HashPassword("123456")
                };

                UserManager.Create(user);
                UserManager.AddToRole(user.Id, Roles.Admin.ToString());
            }
            else
            {
                user = context.Users.FirstOrDefault(u => u.UserName == "admin@admin.com");
            }

            for (int i = 0; i < 100; i++)
            {
                context.Articles.Add(new Article
                {
                    IsApproved = true,
                    Title = "Title " + (i + 1),
                    Description = "Description " + (i + 1),
                    User = user,
                    Views = (i + 1),
                    Source = "Source " + (i + 1)                    
                });
            }
            context.SaveChanges();
        }
    }
}