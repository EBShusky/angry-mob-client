'use strict';

var gulp          = require('gulp');
var runSequence   = require('run-sequence');

module.exports = function(options){
  /**
   * Copy /svg folder
   *
   * src:   /src
   * dest:  /.tmp
   */
  gulp.task('svg', function(){
    return gulp.src(options.src + '/svg/**/*')
      .pipe(gulp.dest(options.tmp + '/svg'));
  });

  gulp.task('images', function(){
    return gulp.src(options.src + '/images/**/*')
      .pipe(gulp.dest(options.tmp + '/images'));
  });

  gulp.task('configs', function(){
    return gulp.src(options.src + '/configs/**/*')
      .pipe(gulp.dest(options.tmp + '/configs'));
  });

  gulp.task('fonts', function(cb){
    runSequence(
      ['fonts:bootstrap', 'fonts:font-awesome'],
      cb
    );
  });

  gulp.task('i18n', function(cb){
    return gulp.src(options.src + '/i18n/**/*')
      .pipe(gulp.dest(options.tmp + '/i18n'));
  });

  gulp.task('fonts:bootstrap', function(){
    return gulp.src(options.bower + '/bootstrap-sass-official/assets/fonts/**/*')
      .pipe(gulp.dest(options.tmp + '/fonts'));
  });

  gulp.task('google-site-verification', function(){
    return gulp.src(options.src + '/google14f7bb800c2cf760.html')
      .pipe(gulp.dest(options.tmp));
  });

  gulp.task('fonts:font-awesome', function(){
    return gulp.src(options.bower + '/font-awesome/fonts/**/*')
      .pipe(gulp.dest(options.tmp + '/fonts'));
  });
};
