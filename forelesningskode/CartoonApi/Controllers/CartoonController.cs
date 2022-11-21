using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    context = _context; // initierer CartoonContext slik at vi har tilgang til CRUD mot databasen mot de Model-klassene angitt i DbSet<>
  }

  [HttpGet]
  public async Task<ActionResult<List<Cartoon>>> Get()
  {
    try
    {
      List<Cartoon> cartoons = await context.Cartoons.ToListAsync();
      return Ok(cartoons);
    }
    catch
    {
      return StatusCode(500); // 500 er en generisk status for at noe galt skjedde på serverside; eksempelvis her at Web Api ikke kunne nå databasen.
    }
  }

  [HttpGet("{id}")]
  public async Task<ActionResult<Cartoon>> Get(int id)
  {
    Cartoon? cartoon = await context.Cartoons.FindAsync(id);

    if (cartoon != null)
    {
      return Ok(cartoon); // Status 200 + Cartoon-objektet
    }
    else
    {
      return NotFound(); // Status 404 Ikke Funnet
    }
  }

  [HttpPost]
  public IActionResult Post(Cartoon newCartoon)
  {
    try
    {
      context.Cartoons.Add(newCartoon);
      context.SaveChanges();
      return CreatedAtAction("Get", new { id = newCartoon.Id }, newCartoon); // Sender tilbake objektet som ble lagret inklusivt Id som den nettopp har fått etter lagring til databasen.
    }
    catch
    {
      return StatusCode(500); // 500 er en generisk status for at noe galt skjedde på serverside; eksempelvis her at Web Api ikke kunne nå databasen.
    }
  }

  /*
      Hvis man skal ha flere GET-metoder enn stardand-GET, som returnerer alle, og GET etter id benytter man Route action
  */
  [HttpGet]
  [Route("[action]/{title}")] // https://localhost:7XXX/cartoon/getByTitle/tegnefilmnTittelHer
  public void GetByTitle(string title)
  {

  }

  [HttpPut]
  public IActionResult Put(Cartoon editedCartoon)
  {
    context.Entry(editedCartoon).State = EntityState.Modified;
    context.SaveChanges(); // anbefaler async
    return NoContent(); //status code 204
  }

  [HttpDelete("{id}")] // URL angivelse -> https://{PORT}/{CONTROLLER}/{ID} -> https://7XXX/cartoon/id
  public IActionResult Delete(int id)
  {
    Cartoon? cartoonToDel = context.Cartoons.Find(id);

    if (cartoonToDel != null)
    {
      context.Cartoons.Remove(cartoonToDel);
      context.SaveChanges();
      return NoContent();
    }
    else
    {
      return NotFound();
    }
  }
}

