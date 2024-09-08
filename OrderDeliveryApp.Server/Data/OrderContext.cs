using Microsoft.EntityFrameworkCore;
using OrderDeliveryApp.Models;

namespace OrderDeliveryApp.Data
{
    public class OrderContext : DbContext
    {
        public OrderContext(DbContextOptions<OrderContext> options) : base(options) { }

        public DbSet<Order> Orders { get; set; }
    }
}
