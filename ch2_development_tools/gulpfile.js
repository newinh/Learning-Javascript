const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// Write dependencies of gulp

gulp.task('default', function(){
    // write task of gulp

    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());

    // src of node
    gulp.src("es6/**/*.js", { sourcemaps: true })
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    // src of browser
    gulp.src("public/es6/**/*.js", { sourcemaps: true })
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});