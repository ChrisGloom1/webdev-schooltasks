using disneyWebapi.Interfaces;
namespace disneyWebapi.Models;

public class DisneyCharacter : IDisneyCharacter
{
  public int Id { get; set; }
  public string Name { get; set; } = null!;
  public string Gender { get; set; } = null!;
  public Boolean IsHuman { get; set; }
}