var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

/**
 * Fire static server
 */

gulp.task('dev', ['sass'], function() {

  browserSync.init({
    server: {
      baseDir: './src'
    }
  });

  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

/**
 * Compile SCSS
 */

gulp.task('sass', function() {
  return gulp.src('src/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/styles'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['dev']);
