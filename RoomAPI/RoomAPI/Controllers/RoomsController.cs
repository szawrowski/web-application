using Microsoft.AspNetCore.Mvc;
using RoomAPI.Models;
using RoomAPI.Data;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class RoomsController : ControllerBase
{
    private readonly AppDbContext _context;

    public RoomsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetRooms()
    {
        var rooms = await _context.Rooms.ToListAsync();
        return Ok(rooms);
    }

    [HttpPost]
    public async Task<IActionResult> CreateRoom(Room room)
    {
        _context.Rooms.Add(room);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetRooms), new { id = room.Id }, room);
    }
}
