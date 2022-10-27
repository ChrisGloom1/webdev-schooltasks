namespace disneyWebapi.Interfaces;

interface ISuperhero
{
  int Id { get; set; }
  string Name { get; set; }
  string Gender { get; set; }
  Boolean IsHuman { get; set; }
}