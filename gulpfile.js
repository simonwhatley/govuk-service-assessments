'use strict'

const gulp = require('gulp')
const requireDir = require('require-dir')
const shell = require('gulp-shell')

requireDir('./gulp', {
  recurse: true
})

gulp.task('generate', shell.task('npx @11ty/eleventy --serve'))

gulp.task('generate:dev', shell.task('ELEVENTY_ENV=development npx @11ty/eleventy --serve'))

gulp.task('assets', gulp.parallel(
  // 'fonts',
  // 'images',
  'scripts',
  'styles'
))

gulp.task('build', gulp.series(
  'clean',
  'assets',
  'generate'
))

gulp.task('build:dev', gulp.series(
  'clean',
  'assets',
  'generate:dev'
))
