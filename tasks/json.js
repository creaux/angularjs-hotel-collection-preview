var gulp = require('gulp');

gulp.task('other', function () {
    gulp.src('./src/**/*.json', {base: './src'})
        .pipe(gulp.dest('./dev'));
    gulp.src('./src/.htaccess', {base: './src'})
        .pipe(gulp.dest('./dev'));
});