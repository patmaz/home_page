var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');

//SASS
gulp.task('styles', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
		.pipe(cssnano())
        .pipe(gulp.dest(''))
});

//ES6 via babel
gulp.task('js', function(){
    return gulp.src('js-work/**/*.js')
    .pipe(babel({
			presets: ['es2015']
		}))
	.pipe(uglify())
    .pipe(gulp.dest('js'))
});

//compress img
gulp.task('images', function(){
  return gulp.src('images-work/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('images'))
});


//watch task
gulp.task('default', ['styles'], function () {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js-work/**/*.js', ['js']);
});