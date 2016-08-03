/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify'),
    rename = require('gulp-rename');

var paths = {
  sass: ['source/scss/**/*.scss'],
  script:['source/js/**/*.js']
};

gulp.task('default', ['sass', 'script']);


gulp.task('sass', function(done) {
  gulp.src('source/scss/styles.scss')
    .pipe(sass({includePaths: ['source/scss/']}))
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
    }))
    // .pipe(gulp.dest('build/assets/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('build/assets/css/'))
    .on('end', done);
});

gulp.task('script', function(done) {
  gulp.src('source/js/main.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
    }))
    // .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('build/assets/js/'))
    .on('end', done);
});



gulp.task('watch', function() {
  gulp.watch([paths.sass, paths.script], ['sass', 'script']);
});