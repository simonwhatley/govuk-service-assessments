import gulp from 'gulp'
import config from './config.json' assert { type: 'json' }

export default () => {
  return gulp.src(`${config.paths.buildSrc}/assets/scripts/*.js`)
    .pipe(gulp.dest(`${config.paths.buildDest}/assets/scripts`))
}
