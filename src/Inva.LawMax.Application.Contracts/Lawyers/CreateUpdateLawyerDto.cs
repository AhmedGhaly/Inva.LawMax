using System.ComponentModel.DataAnnotations;

namespace Inva.LawMax.Lawyers
{
    public class CreateUpdateLawyerDto
    {
        public string Name { get; set; }

        public string Position { get; set; }


        public string Mobile { get; set; }

        public string Address { get; set; }
    }
}
