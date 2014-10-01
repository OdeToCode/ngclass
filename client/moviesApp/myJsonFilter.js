(function(){

	var app = angular.module("moviesApp");

	var myJsonFilter = function(){

		return function(o) {
			var result = JSON.stringify(o, null, 4);
			return "WOW! " + result;
		};

	};

	app.filter("myJsonFilter", myJsonFilter);

}());