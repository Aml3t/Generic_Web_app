
var gulp = require("gulp");

// minify Javascript

function minify() {
    return gulp.src(["wwwroot/js/**/*.js"])
        .pipe(gulp.dest("wwwroot/dist/"))
}