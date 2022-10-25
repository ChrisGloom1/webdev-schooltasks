using Microsoft.AspNetCore.Mvc;
namespace TodoApi.Controllers;

[ApiController]
[Route("[controller]")] // kommando hvor en må presisere navnet på kontrolleren i http-req
public class TodoController : ControllerBase // arver fra ControllerBase
{
  // endpoint = metode osm kan kalles på med http req
  [HttpGet] // GET, POST, PUT, DELETE
  public string Get()
  {
    return "Diz iz Dr Get";
  }

  [HttpGet]
  [Route("[action]")] // betyr: legg til /navnpåmetode for å kjøre
  public int GetNumber()
  {
    return 69;
  }
}