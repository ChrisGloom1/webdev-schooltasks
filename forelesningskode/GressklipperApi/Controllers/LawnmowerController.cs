namespace GressklipperApi.Controllers;
using GressklipperApi.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[Controller]")]
public class LawnmowerController : ControllerBase
{
  private List<Lawnmower> lawnmowerList = new List<Lawnmower>
  {
    new Lawnmower {
      Id = 1000,
      Model = "Gressknuseren",
      Price = 420.69,
      Image = "gress1.jpeg"
      },
    new Lawnmower {
      Id = 1001,
      Model = "Løvdreperen",
      Price = 769.99,
      Image = "gress2.jpeg"
      },
    new Lawnmower {
      Id = 1003,
      Model = "Plenrydderen",
      Price = 40.99,
      Image = "gress3.jpeg"
      }
  };

  [HttpGet]
  public List<Lawnmower> Get()
  {
    return lawnmowerList;
  }
}