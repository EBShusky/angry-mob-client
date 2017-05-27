'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

function isOnlyChange(event) {
  return event.type === 'changed';
}

module.exports = function(options) {
  /**
   * Watch changes in files
   */
  gulp.task('watch', ['build:tmp'], function (){
    gulp.watch(options.src + '/**/*.html', function(event){
      runSequence(
        ['inject'],
        function(){
          browserSync.reload(event.path);
        }
      );
    });

    gulp.watch([
      options.src + '/styles/**/*.scss',
      options.src + '/styles/**/*.css'
    ], function(event){
      runSequence(
        ['styles'],
        function(){
          browserSync.reload(event.path);
        }
      );
    });

    gulp.watch(options.src + '/svg/*', function(event){
      runSequence(
        ['svg'],
        function(){
          browserSync.reload(event.path);
        }
      );
    });

    gulp.watch(options.src + '/js/**/*.js', function(event){
      runSequence(
        ['scripts-copy'],
        function(){
          browserSync.reload(event.path);
        }
      );
    });

    gulp.watch(options.src + '/views/**/*.html', function(event){
      runSequence(
        ['html'],
        ['angular-template'],
        function(){
          browserSync.reload(event.path);
        }
      );
    });

    gulp.watch([
      options.src + '/i18n/**/*.json'
    ], function(event){
      runSequence(
        ['i18n'],
        function(){
          browserSync.reload(event.path);
        }
      );
    });
  });
};
