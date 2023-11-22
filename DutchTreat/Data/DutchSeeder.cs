using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace DutchTreat.Data
{
    public class DutchSeeder
    {
        private readonly DutchContext _context;
        private readonly IWebHostEnvironment _env;
        private readonly UserManager<StoreUser> _userManager;

        public DutchSeeder(DutchContext context,
            IWebHostEnvironment env,
            UserManager<StoreUser> userManager)
        {
            _context = context;
            _env = env;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _context.Database.EnsureCreated(); // Ensures that the database exists.

            StoreUser user = await _userManager.FindByEmailAsync("test@test.com");

            if (!_context.Products.Any())
            {
                // Need to create sample data
                var filePath = Path.Combine(_env.ContentRootPath, "Data/art.json");
                var json = File.ReadAllText(filePath);
                var products = JsonSerializer.Deserialize<IEnumerable<Product>>(json);

                _context.Products.AddRange(products);

                var order = new Order()
                {
                    OrderDate = DateTime.Today,
                    OrderNumber = "10000",
                    Items = new List<OrderItem>()
                    {
                        new OrderItem()
                        {
                            Product = products.First(),
                            Quantity = 5,
                            UnitPrice = products.First().Price
                        }
                    }
                };

                _context.Add(order);

                _context.SaveChanges();

            }
        }
    }
}
