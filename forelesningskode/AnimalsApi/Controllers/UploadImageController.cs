using Microsoft.AspNetCore.Mvc;
namespace AnimalsApi.Controllers;

[ApiController]
[Route("[controller]")]
public class UploadImageController : ControllerBase
{
  private readonly IWebHostEnvironment hosting;
  public UploadImageController(IWebHostEnvironment _hosting)
  {
    hosting = _hosting;
  }
  [HttpGet]
  public string Get()
  {
    return "Tekst";
  }
  [HttpPost]
  public IActionResult SaveImage(IFormFile file)
  {
    string wwwrootPath = hosting.WebRootPath;
    string absolutePath = Path.Combine($"{wwwrootPath}/img/{file.FileName}");

    using (var fileStream = new FileStream(absolutePath, FileMode.Create))
    {
      file.CopyTo(fileStream);
    }
    return Ok();
  }
}