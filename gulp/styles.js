'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
// const autoprefixer = require('gulp-autoprefixer')

const config = require('./config.json')

gulp.task('styles', () => {
  return gulp.src(config.paths.buildSrc + '/assets/styles/*.scss')
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    // .pipe(autoprefixer('Last 3 versions'))
    .pipe(gulp.dest(config.paths.buildDest + '/assets/styles'))
})
