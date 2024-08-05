using Microsoft.EntityFrameworkCore;
using BuildingAPI.Models;

namespace BuildingAPI.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Building> Buildings { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
