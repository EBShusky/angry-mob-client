'use strict';

var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var browserSyncSpa  = require('browser-sync-spa');
var util            = require('util');

module.exports = function(options) {
  function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if(baseDir === options.src || (util.isArray(baseDir) && baseDir.indexOf(options.src) !== -1)) {
      routes = {
        '/bower': 'bower',
        '/src': 'src'
      };
    }

    var server = {
      baseDir: baseDir,
      routes: routes
    };

    browserSync.instance = browserSync.init({
      startPath: '/',
      server: server,
      browser: browser
    });
  }

  browserSync.use(browserSyncSpa({
    selector: '[ng-app]'// Only needed for angular apps
  }));

  /**
   * Serve /src version
   */
  gulp.task('serve', ['watch'], function () {
    browserSyncInit([options.tmp, options.src]);
  });

  /**
   * Serve /dist version
   */
  gulp.task('serve:dist', ['build:dist'], function () {
    browserSyncInit(options.dist);
  });
};
