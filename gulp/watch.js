import gulp from 'gulp'
import config from './config.json' assert { type: 'json' }

export default (done) => {
  gulp.watch([
    `${config.paths.buildSrc}/assets/images/**/*`,
    `${config.paths.buildSrc}/assets/scripts/**/*`,
    `${config.paths.buildSrc}/assets/styles/**/*`,
    `${config.paths.buildSrc}/_includes/components/**/*.{js,scss}`
  ], gulp.series('build'))
  done()
}
