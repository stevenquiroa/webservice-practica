const gulp = require('gulp')
const browserify = require('gulp-browserify')
const sass = require('gulp-sass')

const dest = 'public/'

gulp.task('script', function(){	
	return gulp.src('client/*.js')
		.pipe(browserify())
		.pipe(gulp.dest(dest))
})

gulp.task('sass', function(){
	return gulp.src('client/*.scss')
		.pipe(sass())
		.pipe(gulp.dest(dest))
})
gulp.task('watch', function() {
  gulp.watch('client/*.scss', ['sass',])
  gulp.watch('client/*.js', ['script'])
})