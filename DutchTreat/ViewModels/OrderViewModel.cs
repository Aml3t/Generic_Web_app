using DutchTreat.Data.Entities;
using System.Collections.Generic;
using System;
using System.ComponentModel.DataAnnotations;

namespace DutchTreat.ViewModels
{
    public class OrderViewModel
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        
        [Required]
        public string OrderNumber { get; set; }

    }
}
