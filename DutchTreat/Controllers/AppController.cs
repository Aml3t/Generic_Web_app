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
    }
}
