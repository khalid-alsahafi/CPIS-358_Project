using System.ComponentModel.DataAnnotations;

namespace CPIS_358_Project.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }
        public string Username { get; set; }
        public string email { get; set; }
        public string Password { get; set; }
        public int HighestScore { get; set; }
        public int LastScore { get; set; }
    }
}
