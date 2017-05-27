'use strict';

var gulp          = require('gulp');
var runSequence   = require('run-sequence');
var rev           = require('gulp-rev');
var ngAnnotate    = require('gulp-ng-annotate');
var uglify        = require('gulp-uglify');
var revReplace    = require('gulp-rev-replace');
var filter        = require('gulp-filter');
var csso          = require('gulp-csso');
var useref        = require('gulp-useref');
var del           = require('del');

module.exports = function(options){
  /**
   * Clear /dist
   */
  gulp.task('clean:dist', function(cb){
    del([options.dist], cb);
  });

  /**
   * Clear /.tmp
   */
  gulp.task('clean:tmp', function(cb){
    del([options.tmp], cb);
  });

  /**
   * Build /.tmp
   */
  gulp.task('build:tmp', function(cb){
    runSequence(
      ['clean:tmp'],
      ['html', 'scripts-copy', 'styles', 'svg', 'images', 'configs', 'fonts', 'i18n'],
      ['angular-template'],
      ['inject'],
      ['google-site-verification'],
      cb
    );
  });

  /**
   * Build /dist
   */
  gulp.task('build:dist', function(cb){
    runSequence(
      ['clean:dist', 'build:tmp'],
      ['copy-to-dist'],
      ['dist-minimalize'],
      cb
    );
  });

  /**
   * Copy all from /.tmp to /dist
   */
  gulp.task('copy-to-dist', function(){
    return gulp.src(options.tmp + '/**/*')
      .pipe(gulp.dest(options.dist));
  });

  /**
   * Minimalize all resurces to dist versio
   */
  gulp.task('dist-minimalize', function(cb){
    runSequence(
      ['dist-minimalize-action'],
      ['dist-minimalize-clear'],
      cb
    );
  });

  /**
   * Clear not need files after dist-minimalize
   */
  gulp.task('dist-minimalize-clear', function(cb){
    del([options.dist + '/js/modules', options.dist + '/styles/styles.css'], cb);
  });

  /**
   * dist-minimalize main action
   */
  gulp.task('dist-minimalize-action', function(){
    var jsFilter = filter("**/*.js");
    var cssFilter = filter("**/*.css");

    var assets;

    return gulp.src(options.dist + '/*.html')
      // concat js files
      .pipe(assets = useref.assets())

      .pipe(jsFilter)
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(jsFilter.restore())

      .pipe(cssFilter)
      .pipe(csso())
      .pipe(cssFilter.restore())

      .pipe(rev())
      .pipe(assets.restore())
      .pipe(useref())
      .pipe(revReplace())
      .pipe(gulp.dest(options.dist));
  });
};

