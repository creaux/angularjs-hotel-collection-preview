var gulp = require("gulp");

gulp.task('watch', function() {
    gulp.watch("src/**/*.ts", ['typescript']);
    gulp.watch("src/**/karma.conf.js", ['test']);
    gulp.watch("src/**/test-main.js", ['test']);
    gulp.watch("src/**/*.html", ['views']);
    gulp.watch("src/**/*.jade", ['views']);
    gulp.watch("src/**/files/**/*", ['assets']);
});