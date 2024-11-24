import { rimrafSync } from 'rimraf'
import config from './config.json' assert { type: 'json' }

export default (done) => {
  rimrafSync(config.paths.buildDest)
  return done()
}
