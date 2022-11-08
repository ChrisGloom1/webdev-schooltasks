var builder = WebApplication.CreateBuilder(args);

// åpner opp og konfigurerer for cors
builder.Services.AddCors(
    options =>
    {
      options.AddPolicy("AllowAll",
          builder => builder
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowAnyOrigin()
      );
    }
);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Aktiverer wwwroot-mappen
app.UseStaticFiles();
app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
