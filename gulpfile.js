const gulp = require('gulp')
const browserify = require('gulp-browserify')

const client = 'client/*.js'
const src = 'client/app.js'
const dest = 'public/'

gulp.task('script', function(){	
	return gulp.src(src)
		.pipe(browserify())
		.pipe(gulp.dest(dest))
})

gulp.task('watch', function() {
  gulp.watch(client, ['script']);
})