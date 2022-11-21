using System.ComponentModel.DataAnnotations;
namespace CartoonApi.Models;

public class Cartoon
{
  [Key]
  public int Id { get; set; }
  public string Title { get; set; } = "";
  public int ageRestriction { get; set; }
}