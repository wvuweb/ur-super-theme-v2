'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass');
var concat        = require('gulp-concat');

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  gulp.src(['./scss/*.scss','!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('default',['sass'], function(){
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('scripts', function() {
  return gulp.src(['./javascripts/vendor/responsive-nav.js', './javascripts/responsive-nav--custom.js', './javascripts/vendor/fontfaceobserver-1.5.1.js', './javascripts/fontfaceobserver__custom.js', './javascripts/vendor/wvu-nav-dropdowns.js', './javascripts/vendor/calendar-build.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./javascripts/'));
});
