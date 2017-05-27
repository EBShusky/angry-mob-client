'use strict';

var gulp          = require('gulp');
var rubySass      = require('gulp-ruby-sass');
var autoprefixer  = require('gulp-autoprefixer');
var runSequence   = require('run-sequence');

/**
 * To run autoprefixer with old Node.js
 */
global.Promise = require('bluebird');

module.exports = function(options){
  /**
   *
   */
  gulp.task('styles', function(cb){
    runSequence(
      ['styles-compile'],
      ['styles-autoprefixer'],
      cb
    );
  });

  /**
   * Compile main scss file (styles.scss) to css file
   *
   * src:   /src
   * dest:  /.tmp
   */
  gulp.task('styles-compile', function(){
    return gulp.src(options.src + '/styles/styles.scss')
      .pipe(rubySass({style: 'expanded'})).on('error', options.errorHandler('RubySass'))
      .pipe(gulp.dest(options.tmp + '/styles'));
  });

  /**
   * Autoprefixes style (like -webkit-xxx)
   *
   * src:   /.tmp
   * dest:  /.tmp
   */
  gulp.task('styles-autoprefixer', function(){
    return gulp.src(options.tmp + '/styles/styles.css')
      .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
      }))
      .pipe(gulp.dest(options.tmp + '/styles/'));
  });


};

