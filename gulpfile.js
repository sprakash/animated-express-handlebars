var gulp = require('gulp'); 
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');
var sassbeautify = require('gulp-sassbeautify');
var cssbeautify = require('gulp-cssbeautify');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

var compass = require('gulp-compass'),
  path = require('path');



'use strict';

/* To compile .scss files into css and watch for further changes */ 

gulp.task('sass', function () {
  gulp.src('sass/**/*.scss')
   //.pipe(sourcemaps.write())

  .pipe(sourcemaps.init())
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest('public/css'))
  .pipe(livereload());

});
 
gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['sass']);
});


 
gulp.task('compass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(compass({
      project: path.join(__dirname, 'sass'),
      css: 'css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('public/css/*.css'));
});

/* To adjust for vendor prefixing. This takes care of different browser need*/
 
/* To adjust for vendor prefixing. This takes care of different browser need*/
 
// gulp.task('browser-autoprefix', function () {
//   return gulp.src(['public/css/styles.css', 'public/css/animations.css'])
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: false
//     }))
//     .pipe(gulp.dest('public/css/'));
// });

 
// gulp.task('css', function () {
//   return gulp.src('sass/**/*.scss')
//     .pipe(cssbeautify())
//     .pipe(gulp.dest('sass/'))
// });


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
gulp.task('sass-and-watch', ['sass','sass:watch']);
gulp.task('minify-js',['compress']);
gulp.task('minify-css',['min-css']);
gulp.task('start-webserver',['webserver']);
gulp.task('sass-pretty',['css']);

/* For the Forgetfull */
gulp.task('gulp-commands', function(){
  var obj = {
    name: "what",
    height: "huh"
  };
  console.log(obj)
})
