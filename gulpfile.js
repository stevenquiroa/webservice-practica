const gulp = require('gulp')
const browserify = require('gulp-browserify')
const sass = require('gulp-ruby-sass')

const src = 'client/app.js'
const dest = 'public/'

gulp.task('script', function(){	
	return gulp.src(src)
		.pipe(browserify())
		.pipe(gulp.dest(dest))
})

gulp.task('sass', function(){
	return sass('client/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   	})
	.pipe(gulp.dest(dest))
})
gulp.task('watch', function() {
  gulp.watch('client/*.scss', ['sass',])
  gulp.watch('client/*.js', ['script'])
})