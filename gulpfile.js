const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
}

function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({    outputStyle: 'compressed'   }))
        .pipe(gulp.dest('./dist/styles'))
}

function image() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images/'))
}

exports.default = gulp.parallel(styles, image, scripts);
exports.watch = watch;