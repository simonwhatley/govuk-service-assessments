import gulp from 'gulp'

import clean from './gulp/clean.js'
import styles from './gulp/styles.js'
import scripts from './gulp/scripts.js'
import watch from './gulp/watch.js'

gulp.task('clean', clean)
gulp.task('styles', styles)
gulp.task('scripts', scripts)
gulp.task('watch', watch)

export const assets = gulp.parallel(
  // 'fonts',
  // 'images',
  // 'scripts',
  'styles'
)

gulp.task('assets', assets)

export const build = gulp.series('clean', 'assets')

gulp.task('build', build)

export const start = gulp.series('clean', 'assets')

gulp.task('start', start)
