using Microsoft.AspNetCore.Mvc;
using RingsOfPowerWebAPI.Models;
namespace RingsOfPowerWebAPI.Controllers;

[ApiController]
[Route("[Controller]")]
public class CharactersController : ControllerBase
{
  List<Character> characterList = new List<Character>{
    new Character{
      Id = 1000,
      Name = "Galadriel",
      Race = "Elf",
      Image = "galadriel.webp"
    },
    new Character{
      Id = 1001,
      Name = "Elrond",
      Race = "Half-elf, half-human",
      Image = "elrond.webp"
    },
    new Character{
      Id = 1002,
      Name = "Arondir",
      Race = "Elf",
      Image = "arondir.webp"
    },
    new Character{
      Id = 1003,
      Name = "Celebrimbor",
      Race = "Elf",
      Image = "celebrimbor.webp"
    },
    new Character{
      Id = 1004,
      Name = "Gil-galad",
      Race = "Elf",
      Image = "gilgalad.webp"
    },
    new Character{
      Id = 1005,
      Name = "Durin IV",
      Race = "Dwarf",
      Image = "durin.webp"
    },
    new Character{
      Id = 1006,
      Name = "Disa",
      Race = "Dwarf",
      Image = "disa.webp"
    },
    new Character{
      Id = 1007,
      Name = "Elanor",
      Race = "Harfoot",
      Image = "elanor.webp"
    },
    new Character{
      Id = 1008,
      Name = "Poppy Proudfellow",
      Race = "Harfoot",
      Image = "poppy.webp"
    },
    new Character{
      Id = 1010,
      Name = "Míriel",
      Race = "Human",
      Image = "miriel.webp"
    },
    new Character{
      Id = 1011,
      Name = "Elendil",
      Race = "Human",
      Image = "elendil.webp"
    },
    new Character{
      Id = 1012,
      Name = "Isildur",
      Race = "Human",
      Image = "isildur.webp"
    },
    new Character{
      Id = 1013,
      Name = "Bronwyn",
      Race = "Human",
      Image = "bronwyn.webp"
    },
    new Character{
      Id = 1014,
      Name = "Theo",
      Race = "Human",
      Image = "theo.webp"
    },
    new Character{
      Id = 1015,
      Name = "Halbrand",
      Race = "Human",
      Image = "halbrand.webp"
    },
    new Character{
      Id = 1016,
      Name = "Eärien",
      Race = "Human",
      Image = "earien.webp"
    },
    new Character{
      Id = 1017,
      Name = "Pharazon",
      Race = "Human",
      Image = "pharazon.webp"
    },
    new Character{
      Id = 1018,
      Name = "Kemen",
      Race = "Human",
      Image = "kemen.webp"
    },
  };

  [HttpGet]
  public List<Character> Get()
  {
    return characterList;
  }

  [HttpGet("id/{id}")]
  public Character GetById(int id)
  {
    Character? chosenCharacter = characterList.Find(character => character.Id == id);
    return chosenCharacter;
  }

  [HttpGet("name/{name}")]
  public Character GetByName(string name)
  {
    Character? chosenCharacter = characterList.Find(character => character.Name == name);
    return chosenCharacter;
  }

  [HttpGet("race/{race}")]
  public List<Character> GetByRace(string race)
  {
    List<Character> chosenCharacter = characterList.FindAll(character => character.Race == race);
    return chosenCharacter;
  }
}

