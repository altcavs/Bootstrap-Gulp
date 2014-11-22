// Include gulp
var gulp = require('gulp');
// Include Our Plugins
var jshint = require('gulp-jshint');
var less = require('gulp-less');

var connect = require('gulp-connect');
/*
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
*/
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('less', function() {
    return gulp.src('less/bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

/*
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
*/
gulp.task('webserver', function() {
  connect.server({
    livereload: true,
    port: 1717
  });
});
// Watch Files For Changes
gulp.task('watch', function() {
    //gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('app/*.js', ['lint']);
    gulp.watch('less/*.less', ['less']);
    gulp.watch(['./*.html'], ['html']);
});

// Default Task
gulp.task('default', ['lint', 'less','webserver','watch']);