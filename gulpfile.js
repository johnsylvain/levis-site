var gulp = require('gulp'),
autoprefix = require('gulp-autoprefixer'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
uglify = require('gulp-uglify'),
gutil = require('gulp-util'),
cssmin = require('gulp-cssmin'),
browserSync = require('browser-sync');

var paths = {
	css: './src/scss/**/*.scss',
	js: './src/js/main.js'
}

gulp.task('serve', ['css', 'js'] ,function(){
	browserSync.init(['./dist/**/*.*'], {
		server: {
            baseDir: "./"
        }
	});
	gulp.watch(paths.css, ['css']);
	gulp.watch(paths.js, ['js']).on('change', browserSync.reload);
	gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('css', function() {
	gulp.src(paths.css)
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefix())
	.pipe(cssmin())
	.pipe(sourcemaps.write())
	.pipe( gulp.dest('./dist/css') )
});

gulp.task('js', function() {
	gulp.src(paths.js)
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe( gulp.dest('./dist/js') )
});

gulp.task('default', ['css', 'js', 'serve']);