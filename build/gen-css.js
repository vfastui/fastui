const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const components = require('./components.json')

function buildSeperateCss(cb) {
    Object.keys(components).forEach((compName) => {
        gulp.src(`../src/${compName}/${compName}.less`)
            .pipe(less())
            .pipe(autoprefixer())
            .pipe(cleanCSS())
            .pipe(rename(`${compName}.css`))
            .pipe(gulp.dest(`../dist/${compName}`))
    })
    gulp.src(`../src/grid/col.less`)
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename(`col.css`))
        .pipe(gulp.dest(`../dist/col`))
    // gulp.src(`../src/grid/row.less`)
    //     .pipe(less())
    //     .pipe(autoprefixer())
    //     .pipe(cleanCSS())
    //     .pipe(rename(`row.css`))
    //     .pipe(gulp.dest(`../dist/row`))

    cb()
}

exports.default = gulp.series(buildSeperateCss)
