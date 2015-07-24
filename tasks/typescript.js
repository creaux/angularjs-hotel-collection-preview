var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps');

/**
 * gulp-typescript
 * https://www.npmjs.com/package/gulp-typescript
 */
gulp.task('typescript', function () {
    var typescript = gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            module: 'amd',
            target: "ES5",
            typescript: require('typescript'),
            declarationFiles: true
        }));

    return typescript
        .pipe(sourcemaps.write())
        .pipe(
            gulp.dest('dev')
        );
});