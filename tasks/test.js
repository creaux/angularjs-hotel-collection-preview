var gulp = require('gulp');

gulp.task('test', function () {
    gulp.src('./src/**/karma.conf.js', { base: './src'})
        .pipe(gulp.dest('./dev'));
    gulp.src('./src/**/test-main.js', { base: './src'})
        .pipe(gulp.dest('./dev'));
});