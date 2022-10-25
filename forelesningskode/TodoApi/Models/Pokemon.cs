namespace Pokemon.Models;

public class Pokemon
{
  // default value = null
  // public string Name {get;set;} = null!;
  public string? Name { get; set; }
  public int Age { get; set; }
  public double Height { get; set; }
  public string[]? Skills { get; set; }
}