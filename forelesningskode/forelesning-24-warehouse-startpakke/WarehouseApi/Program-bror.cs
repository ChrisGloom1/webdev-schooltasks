// using Microsoft.EntityFrameworkCore;
// using WarehouseApi.Contexts;

// var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.
// builder.Services.AddDbContext<WarehouseContext>(
//     options => options.UseSqlite("Data Source=WarehouseDatabase.db")
// );

// builder.Services.AddCors(
//     options => {
//         options.AddPolicy("AllowAll",
//             builder => builder
//                 .AllowAnyHeader()
//                 .AllowAnyOrigin()
//                 .AllowAnyMethod()

//         );
//     }
// );


// builder.Services.AddControllers();
// // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// var app = builder.Build();

// app.UseCors("AllowAll");

// DefaultFilesOptions defaultFilesOptions = new DefaultFilesOptions();
// defaultFilesOptions.DefaultFileNames.Add("index.html");
// app.UseDefaultFiles(defaultFilesOptions);

// app.UseStaticFiles();

// // Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();

// app.UseAuthorization();

// app.MapControllers();

// app.Run();
