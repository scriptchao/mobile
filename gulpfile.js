var gulp = require('gulp');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var del = require('del');
var stylus = require('gulp-stylus');


var paths = {
    scripts: './develop/js/*.js',
    images: './develop/image/*',
    stylus: './develop/stylus/*.styl'
};

gulp.task('clean', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return del('./product/image');
});
gulp.task('scripts',function(){
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(gulp.dest('./product/js'));//输出到
});

// Copy all static images
gulp.task('images', ['clean'], function() {
    return gulp.src(paths.images)
        // Pass in options to the task
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('./product/image'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {//监听
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.stylus,['stylus']);
});
gulp.task('stylus',function(){
    return gulp.src(paths.stylus).pipe(stylus({
        compress : true
    })).pipe(gulp.dest('./product/css'))
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'images','stylus']);
