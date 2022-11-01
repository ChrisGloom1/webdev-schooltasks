namespace RingsOfPowerWebAPI.Models;
using RingsOfPowerWebAPI.Interfaces;

public class Character : ICharacter
{
  public int Id { get; set; }
  public string Name { get; set; } = "";
  public string Race { get; set; } = "";
  public string Image { get; set; } = "";
}