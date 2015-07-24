//var gulp = require('gulp'),
//    inject = require('gulp-inject'),
//    bower = require('main-bower-files');
//
//gulp.src('./index.html')
//    .pipe(inject(
//        gulp.src(mainBowerFiles(), { base: 'dev/vendor' }), {
//            transform: function (filepath) {
//                if (filepath.slice(-5) === '.docx') {
//                    return '<li><a href="' + filepath + '">' + filepath + '</a></li>';
//                }
//                // Use the default transform as fallback:
//                return inject.transform.apply(inject.transform, arguments);
//            }
//        }
//    ));
