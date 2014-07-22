using AtTheMovies.Controllers;
using AtTheMovies.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AtTheMovies.Tests.Controllers
{
    [TestClass]
    public class CompanyInfoControllerTests
    {
        [TestMethod]
        public void Can_Return_Comnpany_Info()
        {
            var controller = new CompanyController();
            var result = controller.Info("Scott", "");

            var model = result.Model as GreetingInfoModel;
            Assert.AreEqual("Scott", model.Username);
        }
    }
}
