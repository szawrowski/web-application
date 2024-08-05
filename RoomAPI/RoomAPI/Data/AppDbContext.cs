using Microsoft.EntityFrameworkCore;
using RoomAPI.Models;

namespace RoomAPI.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Room> Rooms { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
}
