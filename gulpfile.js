"use strict";
let gulp = require('gulp'),
    concat = require('gulp-concat'),
    gulpBabel = require('gulp-babel'),
    modules = require('./js/modules.json'),
    change = require('gulp-change'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

function toJsModule (content) {
    let replaced = content.replace('\'use strict\';', '');

    return '((angular) => {' + replaced + '\n})(angular);\n';
}

gulp.task('default', () => {
    gulp.src([
            './js/base.js',
            './js/routes/*.js',
            './js/modules/**/*.js'
        ])
        .pipe(jshint({lookup: true}))
        .pipe(jshint.reporter(stylish))
        .pipe(change(toJsModule))
        .pipe(concat('app.js'))
        .pipe(gulpBabel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./js/'));
});