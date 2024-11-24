import gulp from 'gulp'
import sass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import config from './config.json'

const sassCompiler = sass(dartSass)

export const styles = () => {
  return gulp.src(`${config.paths.buildSrc}/assets/styles/*.scss`)
    .pipe(sassCompiler({
      outputStyle: 'compressed'
    }).on('error', sassCompiler.logError))
    .pipe(autoprefixer('Last 3 versions'))
    .pipe(gulp.dest(`${config.paths.buildDest}/assets/styles`))
}

gulp.task('styles', styles)
