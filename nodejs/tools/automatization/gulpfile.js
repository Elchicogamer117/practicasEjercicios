const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (cb) => {
    console.log('Building the site')
    setTimeout(cb, 1200);
})

gulp.task('serve', (cb) => {
    gulp.src('www/index.html')
        .pipe(server({
            livereload: false,
            open: true,
        }));
});

gulp.task('default', gulp.series('build', 'serve'))
