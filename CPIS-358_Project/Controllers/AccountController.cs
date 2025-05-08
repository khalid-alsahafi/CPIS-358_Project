using CPIS_358_Project.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CPIS_358_Project.Controllers
{
    public class AccountController : Controller
    {
        private UserDbContext _context;
        private UserManager<IdentityUser> _userManager;
        private SignInManager<IdentityUser> _signInManager;
        public AccountController(UserDbContext context, UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet]
        public IActionResult Register()
        {
            return RedirectToAction("Login", "Home");
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new User
                {
                    UserName = model.Username,
                };

                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    return RedirectToAction("Login", "Home");
                }
            }
            return View("SignUp", "Home");
        }
        [HttpPost]
        public async Task<IActionResult> Login(LoginModelView model)
        {
            var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, true, false);
            if (result.Succeeded)
            {
                return RedirectToAction("UserProfile", "Home");
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }

        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Login", "Home");
        }
    }
}
