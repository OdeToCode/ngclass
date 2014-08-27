var MainController = function () {
    var main = {
        greeting: "Hello, World!",
        firstName: "Alan",
        changeName: updateGreeting,
        movies: [
            { title: "Star Wars", length: 120 },
            { title: "Star Wars 2", length: 100 },
            { title: "Star Wars 3", length: 100 }
        ]
    };

    return main;

    function updateGreeting() {
        main.greeting = "Hello, " + main.firstName;
    }
};