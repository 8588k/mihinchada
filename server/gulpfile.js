var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')
var jslint = require('gulp-jslint');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

var paths = {
    'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json'],
    'style': {
        all: './public/styles/**/*.scss',
        output: './public/styles/'
    }

};

gulp.task('nodemon', function (cb) {
    return nodemon({
        script: 'keystone.js'
    });
});

gulp.task('watch:sass', function () {
    gulp.watch(paths.style.all, ['sass']);
});


gulp.task('sass', function(){
    gulp.src(paths.style.all)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.style.output));
});

gulp.task('lint', function(){
    gulp.src(paths.src)
        .pipe(jslint());
});

gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [
  'watch:sass',
]);

gulp.task('default', ['watch', 'lint','nodemon']);
