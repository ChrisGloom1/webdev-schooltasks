#nullable disable
namespace TraktorApi.Models;
using Microsoft.EntityFrameworkCore;
// using PROJECTFOLDERFOLDER.CONTEXTFOLDER dersom Contextfil ikke ligger i samme mappe som Models

public class TractorContext : DbContext
{
  public TractorContext(DbContextOptions<TractorContext> options) : base(options) { }
  public DbSet<TraktorApi.Models.Tractor> Tractor { get; set; }
  public DbSet<TraktorApi.Models.Owner> Owner { get; set; }
}