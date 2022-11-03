namespace TraktorApi.Models;
using System.ComponentModel.DataAnnotations;
public class Owner
{
  [Key]
  public int Id { get; set; }
  public string Name { get; set; } = "";
}