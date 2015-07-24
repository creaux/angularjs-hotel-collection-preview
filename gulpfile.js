var gulp = require('gulp'),
    requireDir = require('require-dir'),
    plugins = require('gulp-load-plugins')(),
    tasks = requireDir('./tasks');

// Development task
gulp.task('development', [
    'assets',
    'other',
    'typescript',
    'views',
    'test'
]);

// Production environment task TODO
gulp.task('production', []);

// Default gulp task
gulp.task('default', [
    'development'
]);