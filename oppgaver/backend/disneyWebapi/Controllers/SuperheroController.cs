using Microsoft.AspNetCore.Mvc;
using disneyWebapi.Models;
namespace disneyWebapi.Controllers;

[ApiController]
[Route("[controller]")]
public class SuperheroController : ControllerBase
{
  List<Superhero> superheroList = new List<Superhero>{
    new Superhero {
      Id = 1000,
      Name = "Black Panther",
      Gender = "Male",
      IsHuman = true
    },
    new Superhero {
      Id = 1001,
      Name = "Captain America",
      Gender = "Male",
      IsHuman = true
    },
    new Superhero {
      Id = 1002,
      Name = "Captain Marvel",
      Gender = "Female",
      IsHuman = true
    },
  };

  [HttpGet]
  public List<Superhero> Get()
  {
    return superheroList;
  }

  [HttpGet("{id}")]
  public Superhero Get(int id)
  {
    Superhero? foundSuperhero = superheroList.Find(superhero => superhero.Id == id);
    return foundSuperhero;
  }
}