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

    return replaced; //'((angular) => {' + replaced + '\n})(angular);\n';
}

function createAngularModules() {
    var modulesCache = '';

    for (let i = 0, l = modules.custom.length; l > i; i++) {
        modulesCache += 'angular.module("' + modules.custom[i] + '", []);\n\n';
    }

    return modulesCache;
}

function createMainModule() {
    var allModules = modules.custom.concat(modules.vendor);

    return 'angular.module(\'App\', ["' + allModules.join('",  "') + '"]);';
}

function concatContentAndCustomData(data) {
    return function (content) {
        return data + '\n\n' + content;
    }
}

gulp.task('default', () => {
    gulp.src([
            './js/routes/*.js',
            './js/modules/**/*.js',
            './js/constants.js'
        ])
        .pipe(jshint({lookup: true}))
        .pipe(jshint.reporter(stylish))
        .pipe(change(toJsModule))
        .pipe(concat('app.js'))
        .pipe(change(concatContentAndCustomData(createMainModule())))
        .pipe(change(concatContentAndCustomData(createAngularModules())))
        .pipe(gulpBabel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./js/'));
});