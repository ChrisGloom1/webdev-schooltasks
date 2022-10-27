namespace disneyWebapi.Interfaces;

interface IDisneyCharacter
{
  int Id { get; set; }
  string Name { get; set; }
  string Gender { get; set; }
  Boolean IsHuman { get; set; }
}