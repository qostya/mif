"use strict";
let gulp = require('gulp'),
    concat = require('gulp-concat'),
    gulpBabel = require('gulp-babel'),
    modules = require('./js/modules.json'),
    change = require('gulp-change');

function toJsModule (content) {
    return '((angular) => {' + content + '\n})(angular);\n';
}

gulp.task('default', () => {
    gulp.src([
        './js/base.js',
        './js/routes/*.js',
        './js/modules/**/*.js'
    ])
    .pipe(change(toJsModule))
    .pipe(concat('app.js'))
    .pipe(gulpBabel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('./js/'));
});