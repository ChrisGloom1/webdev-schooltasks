using MotorsagApi.Interfaces;
namespace MotorsagApi.Models;

public class Chainsaw : IChainsaw
{
  public int Id { get; set; }
  public string Brand { get; set; } = null!;
  public string Model { get; set; } = "Not set";
  public double Price { get; set; }
}