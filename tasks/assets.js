var gulp = require('gulp');

gulp.task('assets', function () {
    gulp.src('./src/**/files/**/*', {base: './src'})
        .pipe(gulp.dest('./dev'));
});