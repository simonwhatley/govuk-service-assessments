'use strict'

const gulp = require('gulp')
const config = require('./config.json')

gulp.task('watch', (done) => {
  gulp.watch([
    config.paths.buildSrc + '/assets/images/**/*',
    config.paths.buildSrc + '/assets/scripts/**/*',
    config.paths.buildSrc + '/assets/styles/**/*'
  ], gulp.series('build'))
  done()
})
