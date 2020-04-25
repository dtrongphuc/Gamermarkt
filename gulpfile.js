const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
//compile scss into css
function style() {
    return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
           baseDir: "./src",
           index: "/index.html"
        }
    });
    gulp.watch('./src/scss/**/*.scss', style)
    gulp.watch('./src/css/main.css', style)
    gulp.watch('./src/*.html').on('change',browserSync.reload);
}
exports.style = style;
exports.watch = watch;