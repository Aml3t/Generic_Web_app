using Microsoft.AspNetCore.Mvc;

namespace DutchTreat.Controllers
{
    public class AppController :Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
