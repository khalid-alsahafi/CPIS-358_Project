using System.ComponentModel.DataAnnotations;

namespace CPIS_358_Project.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? Password { get; set; }
        public int HighestScore { get; set; }
        public int LastScore { get; set; }
    }
}
