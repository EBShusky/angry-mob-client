'use strict';

var gulp      = require('gulp');
var wiredep   = require('wiredep').stream;
var fileSort  = require('gulp-angular-filesort');
var inject    = require('gulp-inject');
var replace   = require('gulp-replace');

module.exports = function(options){
  /**
   * Inject js files into html
   */
  gulp.task('inject', function(){
    var wiredepOptions = {
      directory: 'bower',
      exclude: [/jquery/, /bootstrap-sass-official/],
      overrides: {
        'angular-count-to': {
          main: ['./src/count-to.js']
        },
        'socket.io-client': {
          main: ['./socket.io.js']
        },
        'font-awesome': {
          main: ['./css/font-awesome.min.css']
        }
      }
    };

    var injectScripts = gulp.src([
      options.tmp + '/js/**/*.js'
    ])
      .pipe(fileSort()).on('error', options.errorHandler('AngularFilesort'));

    var assets;

    return gulp.src(options.tmp + '/*.html')
      // add bower dependencies
      .pipe(wiredep(wiredepOptions))
      // add other *.js files
      .pipe(inject(injectScripts))
      .pipe(replace('/.tmp/js/', './js/'))
      .pipe(gulp.dest(options.tmp));
  });
};

