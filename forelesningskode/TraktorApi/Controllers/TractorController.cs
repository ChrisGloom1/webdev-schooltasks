namespace TraktorApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TraktorApi.Models;

[ApiController]
[Route("[controller]")]
public class TractorController : ControllerBase
{
  private readonly TractorContext context;

  public TractorController(TractorContext _context)
  { // Dependency injection
    context = _context;
  }

  [HttpGet]
  public async Task<List<Tractor>> Get()
  {
    List<Tractor> allTractors = await context.Tractor.ToListAsync();
    return allTractors;
  }

}