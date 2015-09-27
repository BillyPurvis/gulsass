var gulp = require("gulp");
var	sass = require("gulp-sass");
var	autoprefixer = require('gulp-autoprefixer');
var	minifycss = require('gulp-minify-css');
var	rename = require('gulp-rename');
var util = require('gulp-util');
var connect = require('gulp-connect');
log = util.log;

//gulp.task('mytask', ['array', 'of', 'task', 'names'], function () {
//    'use strict';
//  // Project won't be compliled until the tasks named in the array have been run. 
//});

gulp.task("sass", function () {
    'use strict';
    log("Generating CSS files " + (new Date()).toString());
    gulp.src("./src/assets/css/main.scss")
		.pipe(sass({ style: 'expanded' }))
					.pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest("./src/assets/css"))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest("./src/assets/css"));
});

gulp.task("watch", function () {
    'use strict';
    log("Watching Sass Files");
    gulp.watch("./src/assets/css/main.scss", ["sass"]);
});