'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass');
var rename        = require("gulp-rename");

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  gulp.src(['./scss/*.scss','!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('rename', function () {
  gulp.src("./stylesheets/wvu-hero.css", { base: process.cwd() })
    .pipe(rename({
      prefix: "_",
      extname: ".html"
    }))
    .pipe(gulp.dest("./views")); // ./dist/main/text/ciao/bonjour-aloha-hola.md
});

gulp.task('default',['sass'], function(){
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
