var gulp = require('gulp'),
  connect = require('gulp-connect');
 
gulp.task('connect', function() {
  connect.server({
    port: '1234'
  });
});

gulp.task('dist', function(){
  return gulp.src(['!builds', '!builds/**', '**/*'])
  // Caching images that ran through imagemin
  .pipe(gulp.dest('builds/dist'))
});
 
gulp.task('default', ['connect']);