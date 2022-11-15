using System.ComponentModel.DataAnnotations;

namespace CartoonApi.Models;

using CartoonApi.Interfaces;

public class Cartoon : ICartoon
{
    [Key]
    public int Id {get; set;}
    public string Title {get; set;} = "";
    public int AgeRestriction {get; set;}
}