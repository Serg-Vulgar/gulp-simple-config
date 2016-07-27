var gulp = require('gulp');
var del = require('del');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('clean', function () {
    del('dist');
});


gulp.task('bundle', function () {
    return gulp.src('www/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    return gulp.src('www/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concat('styles.min.css'))
        // .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['clean', 'css', 'bundle'], function () {
    console.log('build complete');
});