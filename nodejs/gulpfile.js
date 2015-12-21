var gulp = require("gulp");
var open = require("gulp-open");

gulp.task("server", function() {
	require("./app");
});

gulp.task("open", ["server"], function() {
  gulp.src(__filename)
      .pipe(open({uri:"http://localhost:8080"}));
});

gulp.task("default", ["open"], function() {
	
});