using Microsoft.AspNetCore.Mvc;
using System;

namespace DutchTreat.Controllers
{
    public class AppController :Controller
    {
        public IActionResult Index()
        {
            //throw new InvalidProgramException("U Mirin Bruh?");
            return View();
        }


        [HttpGet("contact")]
        public IActionResult Contact()
        {
            ViewBag.Title = "Contact Us";

            throw new InvalidOperationException("The error you wanted^^");

            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About Us";

            return View();
        }
    }
}
