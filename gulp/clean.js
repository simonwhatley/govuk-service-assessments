import gulp from 'gulp'
import { rimrafSync } from 'rimraf'
import config from './config.json'

export const clean = (done) => {
  rimrafSync(config.paths.buildDest)
  return done()
}

gulp.task('clean', clean)
