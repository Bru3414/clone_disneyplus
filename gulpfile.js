const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({    outputStyle: 'compressed'   }))
        .pipe(gulp.dest('./dist/styles'))
}

exports.default = styles;
exports.watch = watch;