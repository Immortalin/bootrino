'use strict';

var gulp = require('gulp');
var rename = require("gulp-rename");
var minifyInline = require('gulp-minify-inline');

var DEST = 'build/';

gulp.task('minify-inline', function() {
  gulp.src('src/*.html')
    .pipe(minifyInline())
    .pipe(rename({ extname: '.min.html' }))
    .pipe(gulp.dest(DEST));
});


gulp.task('default', ['minify-inline']);