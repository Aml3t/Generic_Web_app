using AutoMapper;
using DutchTreat.Data.Entities;
using DutchTreat.ViewModels;

namespace DutchTreat.Data
{
    public class DutchMappingProfile : Profile
    {
        public DutchMappingProfile()
        {
            //Mapping properties from one object to another one.
            CreateMap<Order, OrderViewModel>()
                .ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.Id))
                .ReverseMap();

            CreateMap<OrderItem, OrderItemViewModel>()
                .ReverseMap()
                .ForMember(m => m.Product, opt => opt.Ignore());
        }
    }
}
