"use strict";
let gulp = require('gulp'),
    concat = require('gulp-concat'),
    gulpBabel = require('gulp-babel');

gulp.task('default', () => {
    gulp.src([
        './js/modules/**/*.js'
    ])
    .pipe(concat('app.js'))
    .pipe(gulpBabel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./js/'));
});