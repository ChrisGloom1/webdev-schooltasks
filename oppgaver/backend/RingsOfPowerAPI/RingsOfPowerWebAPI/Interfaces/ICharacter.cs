namespace RingsOfPowerWebAPI.Interfaces;

interface ICharacter
{
  int Id { get; set; }
  string Name { get; set; }
  string Race { get; set; }
  string Image { get; set; }
}