/**
 * Dependencies
 */

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    declare = require('gulp-declare'),
    del = require('del'),
    handlebars = require('gulp-handlebars'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    wrap = require('gulp-wrap');


/**
 * Default tasks
 */

gulp.task('del-build', function() {
    del.sync(['www/build/*'], function(err) {
        console.log("www/build/ files deleted");
    });
});

gulp.task('templates', function(){
    gulp.src(['www/app/templates/**/*.hbs'])
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: '__templates',
            noRedeclare: true
        }))
        .pipe(concat('templates.js'))
        .pipe(size({
            title: 'JS size:'
        }))
        .pipe(gulp.dest('www/app/templates/'));
});

// ['templates'],
gulp.task('js-build', function() {
    gulp.src([
        // dependencies
        'node_modules/jquery/dist/jquery.js',
        'node_modules/handlebars/dist/handlebars.js',
        'node_modules/underscore/underscore.js',
        'node_modules/materialize-css/dist/js/materialize.js',
        'node_modules/backbone/backbone.js',
        'node_modules/backbone.marionette/lib/backbone.marionette.js',
        'node_modules/fastclick/lib/fastclick.js',
        'node_modules/jquery-mockjax/dist/jquery.mockjax.min.js',
        'node_modules/socket.io-client/socket.io.js',
        // mocks
        'www/app/mocks/mock.js',
        // app
        'www/app/app.js',
        'www/app/admob.module.js',
        'www/app/miHinchada.module.js',
        'www/app/templates/templates.js',
        'www/app/utils/handlebars-helpers.js',
        'www/app/models/*.js',
        'www/app/collections/*.js',
        'www/app/views/modal-bottom.item.view.js',
        'www/app/views/footballMatch.layout.view.js',
        // 'www/app/views/header.item.view.js',
        'www/app/views/header.layout.view.js',
        // 'www/app/views/tabs.item.view.js',
        'www/app/views/footballField.layout.view.js',
        'www/app/views/team.layout.view.js',
        'www/app/views/footballScore.item.view.js',
        'www/app/views/player.item.view.js',
        'www/app/views/players.collection.view.js',
    ])
    .pipe(concat('bundle.js'))
    .pipe(size({
        title: 'JS size:'
    }))
    .pipe(gulp.dest('www/build/scripts/'));
});

gulp.task('styles-build', function() {
    gulp.src([
            'node_modules/materialize-css/dist/css/materialize.css',
            'www/app/styles/*.css'
        ])
        .pipe(autoprefixer({
            browsers: ['last 5 versions','Firefox ESR']
        }))
        .pipe(concat('bundle.css'))
        .pipe(size({
            title: 'CSS size:'
        }))
        .pipe(gulp.dest('www/build/styles/'));
});

gulp.task('fonts-build', function() {
    gulp.src([
            'node_modules/materialize-css/dist/font/**/*.+(eot|svg|ttf|woff|otf)'
        ])
        .pipe(gulp.dest('www/build/fonts')).on('error', errorHandler);
});

gulp.task('default', ['del-build', 'templates', 'js-build', 'styles-build', 'fonts-build']);

gulp.task('build', ['default']);

gulp.task('watch', function() {
    gulp.start('default');
    gulp.watch([
        'gulpfile.js',
        'www/app/templates/**/*.hbs',
        'www/app/*.js',
        'www/app/**/*.js',
        'www/app/mocks/mock.js'
    ], ['default']);
    gulp.watch('www/app/styles/*.css', ['styles-build']);
});

function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}