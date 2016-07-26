'use strict';
var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');
var path = require('path');
var conf = require('./conf');


var setEnvironment = function(env) {

  return gulp.src('config-env.json')
    .pipe(gulpNgConfig('scarletCms', {
      environment: env,
      createModule: false
    }))
    .pipe(gulp.dest(path.join(conf.paths.src, '/app')));
};

gulp.task('setEnv:local', function() {
  return setEnvironment('local');
});

gulp.task('setEnv:qa', function() {
  return setEnvironment('qa');
});

gulp.task('setEnv:production', function() {
  return setEnvironment('production');
});

