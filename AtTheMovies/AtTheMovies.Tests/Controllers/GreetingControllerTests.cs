using System.Web.Mvc;
using AtTheMovies.Controllers;
using AtTheMovies.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AtTheMovies.Tests.Controllers
{
    [TestClass]
    public class GreetingControllerTests
    {
        [TestMethod]
        public void Can_Put_Together_A_Proper_Message()
        {
            var controller = new GreetingsController();
            var result = controller.Hello("id", "lastName");
            var model = result.Model as GreetingModel;

            Assert.AreEqual("Hello id lastName!", model.Message);
        }
    }
}
