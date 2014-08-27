var MainController = function () {
    var main = {
        greeting: "Hello, No Scope!!",
        firstName: "Alan",
        changeName: updateGreeting
    };

    return main;

    function updateGreeting() {
        main.greeting = "Hello, " + main.firstName;
    }
};