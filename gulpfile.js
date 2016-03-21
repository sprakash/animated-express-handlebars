Kvar gulp = require('gulp'); 
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');




'use strict';

/* To compile .scss files into css and watch for further changes */ 

gulp.task('sass', function () {
  gulp.src('sass/*.scss',{ sourcemap:true, style:'minified'})
   //.pipe(sourcemaps.write())
   .pipe(sass.sync().on('error', sass.logError))
   .pipe(gulp.dest('hi'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('sass/*.scss', ['sass']);
});


/* To adjust for vendor prefixing. This takes care of different browser need*/
 
gulp.task('browser-autoprefix', function () {
  return gulp.src(['hi/*css'])
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('hi'));
});



/* To minify the output of javascript files for faster page load*/
 
gulp.task('compress', function() {
  return gulp.src(['js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('min-js/'));
});


/* To minify the output of css files for faster page load*/ 

gulp.task('min-css', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('min-css/'));
});

/* To start gulp web server. Includes live reload */

 gulp.task('webserver', function() {
  gulp.src('animated-website/index.html')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


/* To beautify/unminify output files */




/* To compress images.




/* Type the first argument in for each of the task below in console followed by 'gulp' 
to do what you want to do. For ex. gulp sass-and-watch */

// To compile, browserprefix and watch  sass files
gulp.task('sass-and-watch', ['sass', 'browser-autoprefix','sass:watch']);
gulp.task('minify-js',['compress']);
gulp.task('minify-css',['min-css']);
gulp.task('start-webserver',['webserver']);
