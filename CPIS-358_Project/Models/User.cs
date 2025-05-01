namespace CPIS_358_Project.Models
{
    public class User
    {
        public string username { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public int highestScore { get; set; }
        public int lastScore { get; set; }
    }
}
