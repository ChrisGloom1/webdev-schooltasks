using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using CartoonApi.Contexts;
using CartoonApi.Models;
namespace CartoonApi.Controllers;

[ApiController]
[Route("[controller]")]
public class CartoonController : ControllerBase
{
  private readonly CartoonContext context;
  public CartoonController(CartoonContext _context)
  {
    context = _context;
  }
  [HttpGet]
  public List<Cartoon> Get()
  {
    List<Cartoon> allCartoons = context.Cartoons.ToList();
    return allCartoons;
  }

  [HttpGet("{id}")]
  public Cartoon Get(int id)
  {
    Cartoon? chosenCartoon = context.Cartoons.Find(id);
    return chosenCartoon;
  }

  [HttpPost]
  public void Post(Cartoon newCartoon)
  {
    context.Cartoons.Add(newCartoon);
    context.SaveChanges();
  }

  // [HttpGet("{title}")]
  // [Route("[action]")] // https://localhost:7023/cartoon/getbytitle/{TITLE}
  // public void GetByTitle(string title)
  // {

  // }
}