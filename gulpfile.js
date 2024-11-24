'use strict'

const gulp = require('gulp')
const requireDir = require('require-dir')

requireDir('./gulp', {
  recurse: true
})

gulp.task('assets', gulp.parallel(
  // 'fonts',
  // 'images',
  // 'scripts',
  'styles'
))

gulp.task('build', gulp.series(
  'clean',
  'assets'
))

gulp.task('start', gulp.series(
  'clean',
  'assets'
))
