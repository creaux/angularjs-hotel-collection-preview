var gulp = require('gulp'),
    jade = require('gulp-jade'),
    rename = require('gulp-rename');

gulp.task('views', function () {
    // When using html
    gulp.src('./src/**/*.html', {base: './src'})
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./dev/views'));

    gulp.src('./src/index.html', {base: './src'})
        .pipe(gulp.dest('./dev'));

    // When using jade
    var YOUR_LOCALS = {};
    gulp.src('./src/**/*.jade', {base: './src'})
        .pipe(rename({dirname: ''}))
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./dev/views'));
});
