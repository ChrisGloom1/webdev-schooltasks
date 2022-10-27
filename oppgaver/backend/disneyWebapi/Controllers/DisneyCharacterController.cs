using Microsoft.AspNetCore.Mvc;
using disneyWebapi.Models;
namespace disneyWebapi.Controllers;

[ApiController]
[Route("[controller]")]
public class DisneyCharacterController : ControllerBase
{
  List<DisneyCharacter> characterList = new List<DisneyCharacter>{
    new DisneyCharacter {
      Id = 5000,
      Name = "Buzz Lightyear",
      Gender = "Male",
      IsHuman = false
    },
    new DisneyCharacter {
      Id = 5001,
      Name = "Minnie Mouse",
      Gender = "Female",
      IsHuman = false
    },
    new DisneyCharacter {
      Id = 5002,
      Name = "Mulan",
      Gender = "Female",
      IsHuman = true
    },
    new DisneyCharacter {
      Id = 5003,
      Name = "Peter Pan",
      Gender = "Male",
      IsHuman = true
    },
  };

  [HttpGet]
  public List<DisneyCharacter> Get()
  {
    return characterList;
  }

  [HttpGet("{id}")]
  public DisneyCharacter Get(int id)
  {
    DisneyCharacter? foundCharacter = characterList.Find(character => character.Id == id);
    return foundCharacter;
  }

}