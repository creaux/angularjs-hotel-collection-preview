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

var server = require('gulp-webserver');

gulp.task('server', function() {
    gulp.src('dev')
        .pipe(server({
            livereload: true,
            fallback: 'index.html',
            host: Process.env.HOST  ||  'localhost',
            port: Process.env.PORT || 80
        }));
});