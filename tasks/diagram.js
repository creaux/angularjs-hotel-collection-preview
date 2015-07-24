var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('diagram', function () {
    return gulp.src('*.js', { read: false })
        .pipe(shell(['dependo -f amd ./dev/modules > ./docs/chart.html']));
});