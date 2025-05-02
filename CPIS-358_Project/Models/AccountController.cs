using Microsoft.AspNetCore.Mvc;

namespace CPIS_358_Project.Models
{
    public class AccountController : Controller
    {
        private UserDbContext _context;
        public AccountController(UserDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return RedirectToAction("Login", "Home");
        }

        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new User
                {
                    Username = model.Username,
                    Password = model.Password
                };

                _context.Users.Add(user);
                _context.SaveChanges();
                return RedirectToAction("Login", "Home");
            }
            return View(model);
        }
    }
}
