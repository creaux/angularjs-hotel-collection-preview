var gulp = require('gulp'),
    server = require('gulp-webserver');

gulp.task('server', function() {
    gulp.src('dev')
        .pipe(server({
            livereload: true,
            fallback: 'index.html',
            port: 80
        }));
});