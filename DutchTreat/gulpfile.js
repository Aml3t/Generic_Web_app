var gulp = require("gulp");
var unglify = require("gulp-unglify");
var concat = ("gulp-concat");

// minify Javascript

function minify() {
    return gulp.src(["wwwroot/js/**/*.js"])
        .pipe(unglify())
        .pipe(concat("dutchtreat.min.js"))
        .pipe(gulp.dest("wwwroot/dist/"))
}

// minify CSS

export.default = minify();