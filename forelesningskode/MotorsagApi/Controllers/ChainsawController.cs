using Microsoft.AspNetCore.Mvc;
using MotorsagApi.Models;
namespace MotorsagApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ChainsawController : ControllerBase
{
  List<Chainsaw> chainsaws = new List<Chainsaw>{
    new Chainsaw {
      Id = 1000,
      Brand = "Karcher",
      Model = "Superpower69",
      Price = 420.69
  },
    new Chainsaw {
      Id = 1001,
      Brand = "Huskverna",
      // Model = "Woodburner",
      Price = 799.50
  },
    new Chainsaw {
      Id = 1002,
      Brand = "Stihl",
      Model = "Cuttonator9000",
      Price = 1200.95
  }
};



  [HttpGet]
  public List<Chainsaw> Get()
  {
    return chainsaws;
  }

  [HttpGet("{id}")]
  public Chainsaw Get(int id)
  {
    Chainsaw? chosenChainsaw = chainsaws.Find(chainsaw => chainsaw.Id == id);
    return chosenChainsaw;
  }


  // hainsaw newChainsaw = new Chainsaw();
  // newChainsaw.Brand = "Karcher";
}

