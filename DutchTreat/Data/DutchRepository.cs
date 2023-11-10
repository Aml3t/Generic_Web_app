namespace DutchTreat.Data
{
    public class DutchRepository
    {
        private readonly DutchContext _context;

        public DutchRepository(DutchContext context)
        {
            _context = context;
        }
    }
}
