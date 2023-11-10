using DutchTreat.Data.Entities;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace DutchTreat.Data
{
    public class DutchRepository
    {
        private readonly DutchContext _context;

        public DutchRepository(DutchContext context)
        {
            _context = context;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _context.Products
                .OrderBy(p => p.Title)
                .ToList();
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _context.Products
                .Where(p => p.Category == category)
                .ToList();
        }

        public IEnumerable<Order> GetAllOrders()
        {
            return _context.Orders
                .OrderBy(p => p.OrderDate)
                .ToList();
        }
    }
}
