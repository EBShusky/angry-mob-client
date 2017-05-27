'use strict';

var gulp          = require('gulp');
var del           = require('del');
var templateCache = require('gulp-angular-templatecache');
var runSequence   = require('run-sequence');

module.exports = function(options) {
  /**
   * Main
   *
   * Run 'angular-template-cache' and then delete /.tmp/views
   */
  gulp.task('angular-template', ['angular-template-cache'], function(cb){
    del([options.tmp + '/views'], cb);
  });

  /**
   * Create templates.js from /views/templates/*
   */
  gulp.task('angular-template-cache-templates', function(cb){
    return gulp.src(options.tmp + '/views/templates/*.html')
      .pipe(templateCache({
        root: 'views/templates/',
        filename: 'templates.js'
      }))
      .pipe(gulp.dest(options.tmp + '/js/modules/templates'));
  });

  /**
   * Create pages.js from /views/pages/*
   */
  gulp.task('angular-template-cache-pages', function(cb){
    return gulp.src(options.tmp + '/views/pages/*.html')
      .pipe(templateCache({
        root: 'views/pages/',
        filename: 'pages.js'
      }))
      .pipe(gulp.dest(options.tmp + '/js/modules/templates'));
  });

  /**
   * Run all templates task in parallel
   */
  gulp.task('angular-template-cache', function(cb){
    runSequence(
      ['angular-template-cache-templates', 'angular-template-cache-pages'],
      cb
    );
  });
};
