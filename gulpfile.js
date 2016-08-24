'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass');
var rename        = require("gulp-rename");

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  gulp.src(['./scss/*.scss','!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
  gulp.src(['./scss/5-css-output/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets/css-output'));
});

gulp.task('rename', function () {
  gulp.src("./stylesheets/css-output/*.css", { base: process.cwd() })
    .pipe(rename({
      prefix: "_",
      extname: ".html"
    }))
    .pipe(gulp.dest("./views")); // ./dist/main/text/ciao/bonjour-aloha-hola.md
  gulp.src("./scss/2-modules/*.scss", { base: process.cwd() })
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(gulp.dest("./views/stylesheets")); // ./dist/main/text/ciao/bonjour-aloha-hola.md
});

gulp.task('default',['sass'], function(){
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
