'use strict'

const gulp = require('gulp')

const config = require('./config.json')

gulp.task('scripts', () => {
  return gulp.src(config.paths.buildSrc + '/assets/scripts/*.js')
    .pipe(gulp.dest(config.paths.buildDest + '/assets/scripts'))
})
