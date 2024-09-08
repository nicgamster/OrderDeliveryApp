using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OrderDeliveryApp.Data;
using OrderDeliveryApp.Models;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace OrderDeliveryApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly OrderContext _context;

        public OrdersController(OrderContext context)
        {
            _context = context;
        }

        
        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(Order order)
        {
            order.OrderNumber = $"ORD-{Guid.NewGuid().ToString().Substring(0, 8).ToUpper()}";
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
        }

        [HttpGet]
        public async Task<ActionResult<IQueryable<Order>>> GetOrders()
        {
            return Ok(await _context.Orders.ToListAsync());
        }

        [HttpGet("test")]
        public IActionResult TestConsoleOutput()
        {
            Console.WriteLine("This is a test message from the OrdersController!");
            return Ok("Message has been written to the console.");
        }

        [HttpGet("test-connection")]
        public IActionResult TestConnection()
        {
            try
            {
                var orderCount = _context.Orders.Count();
                return Ok($"Connection successful! Orders count: {orderCount}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Connection failed: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _context.Orders.FindAsync(id);
            if (order == null) return NotFound();
            return Ok(order);
        }
    }
}
