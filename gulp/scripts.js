import gulp from 'gulp'
import config from './config.json'

export const scripts = () => {
  return gulp.src(`${config.paths.buildSrc}/assets/scripts/*.js`)
    .pipe(gulp.dest(`${config.paths.buildDest}/assets/scripts`))
}

gulp.task('scripts', scripts)
