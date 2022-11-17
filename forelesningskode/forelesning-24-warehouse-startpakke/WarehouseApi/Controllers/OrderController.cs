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

    [HttpGet]
    public async Task<ActionResult<List<Order>>> Get()
    {
        try
        {
            List<Order> orders = await context.Order.Take(20).ToListAsync();        
            return orders;
        }
        catch
        {
            return StatusCode(500);
        }        
    }    

}