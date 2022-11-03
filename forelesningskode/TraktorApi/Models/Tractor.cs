namespace TraktorApi.Models;
using System.ComponentModel.DataAnnotations;

public class Tractor
{
  [Key]
  public int Id { get; set; }
  public string Model { get; set; } = "";
  public string Color { get; set; } = "";
}