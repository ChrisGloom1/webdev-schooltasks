using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WarehouseApi.Contexts;
using WarehouseApi.Models;

namespace WarehouseApi.Controllers;

[ApiController]
[Route("[controller]")]
public class OrderController : ControllerBase
{
  private readonly WarehouseContext context;

  public OrderController(WarehouseContext _context)
  {
    context = _context;
  }

  [HttpGet] // [HttpGet("{skip}/{take}")], Get(int skip, int take), https://7000/ordre/10/100 -> fra 11 ordre, vis neste 100
  public async Task<ActionResult<List<Order>>> Get()
  {
    try
    {
      //.Skip(20).Take(20)
      List<Order> orders = await context.Order.Take(20).ToListAsync();
      return orders;
    }
    catch
    {
      return StatusCode(500);
    }
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(int id)
  {
    try
    {
      Order? orderToDel = await context.Order.FindAsync(id);

      if (orderToDel != null)
      {
        context.Order.Remove(orderToDel);
        await context.SaveChangesAsync();
        return NoContent();
      }
      else
      {
        return NotFound();
      }
    }
    catch
    {
      return StatusCode(500);
    }
  }

}