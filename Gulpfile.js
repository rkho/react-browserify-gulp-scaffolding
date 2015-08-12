var gulp = require('gulp');

var babel = require('babelify');
var browserify = require('browserify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var source = require('vinyl-source-stream');

gulp.task('styles', function() {

  gulp.src(['./client/css/**.css'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./build'))
    .pipe(livereload());

});

gulp.task('browserify', function() {

  return browserify({
    entries: ['./client/js/app.js']
    })
    .transform(babel)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/'))
    .pipe(livereload());

});

gulp.task('images', function() {

  gulp.src(['./client/img/**/*.png', './client/img/**/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img/'))
    .pipe(livereload());

})

gulp.task('dev', function() {
  gulp.run('build');

  livereload.listen();

  gulp.watch('./client/js/**/*.js', ['browserify']);
  gulp.watch('./client/css/**/*.css', ['styles']);
  gulp.watch('./client/img/**/*', ['images']);
})

gulp.task('build', ['styles', 'browserify', 'images']);