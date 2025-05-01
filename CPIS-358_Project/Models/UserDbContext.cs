using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace CPIS_358_Project.Models

{
    public class UserDbContext : IdentityDbContext
    {
        #pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) { }
        #pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider adding the 'required' modifier or declaring as nullable.
        #pragma warning disable CS0114 // Member hides inherited member; missing override keyword
        public DbSet<User> Users {  get; set; }
        #pragma warning restore CS0114 // Member hides inherited member; missing override keyword
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
