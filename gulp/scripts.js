'use strict';

var gulp          = require('gulp');
//var ngAnnotate    = require('gulp-ng-annotate');

module.exports = function(options) {
  /**
   * Copy scripts from /src to /.tmp
   */
  gulp.task('scripts-copy', function(cb){
      return gulp.src(options.src + '/js/**/*.js')
        //.pipe(ngAnnotate())
        .pipe(gulp.dest(options.tmp + '/js'));
  });

};
