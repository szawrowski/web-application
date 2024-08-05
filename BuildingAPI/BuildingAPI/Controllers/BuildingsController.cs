using Microsoft.AspNetCore.Mvc;
using BuildingAPI.Models;
using BuildingAPI.Data;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class BuildingsController : ControllerBase
{
    private readonly AppDbContext _context;

    public BuildingsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetBuildings()
    {
        var buildings = await _context.Buildings.ToListAsync();
        return Ok(buildings);
    }

    [HttpPost]
    public async Task<IActionResult> CreateBuilding(Building building)
    {
        _context.Buildings.Add(building);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetBuildings), new { id = building.Id }, building);
    }
}
