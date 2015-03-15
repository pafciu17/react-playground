var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream')
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    reactify = require('reactify');

gulp.task('serve', ['browserify'], function() {
    connect.server({
        root: 'app',
        port: 8001,
        livereload: true
    });
});

gulp.task('reload', ['browserify'], function() {
    return gulp.src('app/**')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['app/js/src/**', 'app/index.html'], ['reload']);
});

gulp.task('browserify', function(){
    var b = browserify({
        entries: ['./app/js/src/main.js'],
        debug: true,
        transform: [reactify]
    });
    return b.bundle()
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(source('main.js'))
        .pipe(rename(function(path) {
            path.basename = 'bundle';
        }))
        .pipe(gulp.dest('app/js/'));
});


gulp.task('dist', function() {
    var filesForDist = gulpFilter(['**', '!js/**', 'js/bundle.js']),
        jsFiles = gulpFilter('**/*.js');

    return gulp.src('app/**')
        .pipe(filesForDist)
        .pipe(jsFiles)
        .pipe(uglify())
        .pipe(jsFiles.restore())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['serve', 'watch']);