//var MovieController = function($scope) {

//    var movies = [
//        { title: "Star Wars", length: 120, released: "10/1/1977" },
//        { title: "Toy Story", length: 90, released: "10/1/1993" },
//        { title: "Lego Movie", length: 110, released: "2/1/2014" }
//    ];

//    $scope.movies = movies;
//};

var MovieController = function() {

    var vm = this;
    var movies = [
        { title: "Star Wars", length: 120, released: "10/1/1977" },
        { title: "Toy Story", length: 90, released: "10/1/1993" },
        { title: "Lego Movie", length: 110, released: "2/1/2014" }
    ];

    vm.movies = movies;
    vm.increment = function(index) {
        movies[index].length += 1;
    };
    vm.decrement = function(movie) {
        movie.length -= 1;
    };
};