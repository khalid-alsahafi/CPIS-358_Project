using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace CPIS_358_Project.Models
{
    public class User : IdentityUser
    {
        public int HighestScore { get; set; }
        public int LastScore { get; set; }
    }
}
