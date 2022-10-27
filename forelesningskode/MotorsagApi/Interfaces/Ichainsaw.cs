namespace MotorsagApi.Interfaces;

interface IChainsaw
{
  int Id { get; set; }
  string Brand { get; set; }
  string Model { get; set; }
  double Price { get; set; }
}