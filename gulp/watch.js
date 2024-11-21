'use strict'

const gulp = require('gulp')
const config = require('./config.json')

gulp.task('watch', (done) => {
  gulp.watch([
    config.paths.buildSrc + '/assets/images/**/*',
    config.paths.buildSrc + '/assets/scripts/**/*',
    config.paths.buildSrc + '/assets/styles/**/*',
    config.paths.buildSrc + '/_includes/components/**/*.{js,scss}'
  ], gulp.series('build'))
  done()
})
