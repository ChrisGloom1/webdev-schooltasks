#nullable disable
using Microsoft.EntityFrameworkCore;
using CartoonApi.Models;
namespace CartoonApi.Contexts;

public class CartoonContext : DbContext
{
  public CartoonContext(DbContextOptions<CartoonContext> options) : base(options) { }
  public DbSet<Cartoon> Cartoons { get; set; }
}