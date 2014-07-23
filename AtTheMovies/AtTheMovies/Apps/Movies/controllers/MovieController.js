var MovieController = function($scope) {

    var movies = [
        { title: "Star Wars", length: 120, released: "10/1/1977" },
        { title: "Toy Story", length: 90, released: "10/1/1993" },
        { title: "Lego Movie", length: 110, released: "2/1/2014" }
    ];

    $scope.movies = movies;
};