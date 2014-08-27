var MainController = function ($http) {
    var main = {
        greeting: "Hello, World!",
        firstName: "Alan",
        changeName: updateGreeting,
        reason: "",
        movies: []
    };
    init();
    return main;

    function updateGreeting() {
        main.greeting = "Hello, " + main.firstName;
    }

    function onMoviesReceived(response) {
        main.movies = response.data;
    }

    function onMoviesError(reason) {
        main.reason = reason;
    }

    function init() {
        var promise = $http.get("http://localhost:1547/api/movies");
        promise.then(onMoviesReceived, onMoviesError);
    };
};