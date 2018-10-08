/*=============================================
=                  GULP FILE                 =
=============================================*/

/**
*
* The packages we are using
* Not using gulp-load-plugins as it is nice to see whats here.
*
**/

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream'); // Converts Browserify stream to a format that can be consumed by other Gulp plugins
var browserify = require('browserify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var fileinclude = require('gulp-file-include');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();
var replace = require('gulp-replace');
var wiredep = require('wiredep').stream;
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
// images
var imagemin     = require("gulp-imagemin");
var pngquant     = require('imagemin-pngquant');


/**
*
* Styles
* - Compile
* - Compress/Minify
* - Catch errors (gulp-plumber)
* - Autoprefixer
*
**/

gulp.task('css', function () {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(concat('app.css'))
    .pipe(sourcemaps.write('.'))
    // .pipe(sourcemaps.write()) // Inline
    .pipe(gulp.dest('./dist/assets/css'))
    // .pipe(notify({ message: "Sass compiled"}) )
    .pipe(browserSync.stream());
});

gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});

/**
*
* Javascript
* - Uglify
* - JShint
*
**/

/** Include all bower dependencies into a single vendor,js file and compress it*/



gulp.task('js', function () {
  browserify('./src/assets/js/main.js')
    .bundle()
    .on('error', function (e) {
      gutil.log(e);
    })
    .pipe(source('app.bundle.js'))
    .pipe(gulp.dest('./dist/assets/js'))
    //.pipe(notify({ message: "JS bundled."}) )
    .pipe(browserSync.stream());
});



gulp.task('hint', function () {
  return gulp.src(['./src/assets/js/dist/app.bundle.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('compress', function() {
  return gulp.src('./src/assets/js/dist/app.bundle.js')
    .pipe(uglify())
    .pipe(concat('app.bundle.min.js'))
    .pipe(gulp.dest('./dist/assets/js'))
    //.pipe(notify({ message: "JS compressed."}) )
});

/**
*
* HTML
* - inject
*
**/

gulp.task('inject', function() {
  return gulp.src('./src/pages/**/*.html')
    // Partials
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './src/partials/'
    }))
    .pipe(gulp.dest('./dist'))
    // .pipe(notify({ message: "File include tasks done."}) )
    // Inject JS
     // Inject JS
    .pipe(inject(gulp.src(['./src/assets/js/dist/app.bundle.js'],{ read: false }), { relative: true }))
    .pipe(gulp.dest('./dist'))
    // .pipe(notify({ message: "JS injected to layouts." }))
    // Inject CSS
    .pipe(inject(
      gulp.src('./dist/assets/scss/main.css', { read: false }), { relative: true }))
    .pipe(gulp.dest('./dist'))
    // .pipe(notify({ message: "CSS injected to layouts." }))
    .pipe(browserSync.stream());
});


/**
*
* BrowserSync
*
**/


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});





/**
*
* Images
* - Compress them!
**/

gulp.task('images', function () {
  return gulp.src('./src/assets/img/**/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./dist/assets/img'));
});




/**
*
* Default task
* - Runs sass, browser-sync, scripts and image tasks
* - Watchs for file changes for images, scripts and sass/css
*
**/

gulp.task('default', function() {
    gulp.start('css', 'js', 'inject', 'browser-sync', 'watch', 'images');
});


// Build local files,inject partials and js
gulp.task('build', function() {
    gulp.start('css', 'inject',);
});



/**
*
* Watch tasks
*
*
**/

gulp.task('watch', function() {
  // CSS
  gulp.watch('./src/assets/scss/**/*.scss', ['css']);
  // HTML
  gulp.watch('./src/**/*.html', ['inject']);
  gulp.watch('./src/includes/**/*.html', ['inject']);
});
