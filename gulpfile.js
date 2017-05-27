'use strict';

var gulp    = require('gulp');
var gutil   = require('gulp-util');
var wrench  = require('wrench');

var options = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  bower: 'bower',
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  }
};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['build:dist'], function () {

});
