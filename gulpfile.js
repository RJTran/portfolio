const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');

function style() {
    return gulp.src('./styling/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

function minjs() {
    return gulp.src('./app.js')
        .pipe(terser())
        .pipe(gulp.dest('./dist'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./styling/*.scss', style);
    gulp.watch('./app.js', minjs);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.minjs = minjs;
exports.watch = watch;

//'gulp watch' will run watch function.