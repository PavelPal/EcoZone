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
            if (!context.Roles.Any())
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var roles = Enum.GetValues(typeof(Roles)).Cast<Roles>().Select(x => new IdentityRole(x.ToString()));

                foreach (var role in roles)
                    manager.Create(role);
                context.SaveChanges();
            }
        }
    }
}