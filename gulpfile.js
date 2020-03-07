const gulp = require('gulp');

/*
	gulp.task - Define tasks
	gulp.src - Point to files to use
	gulp.dest - Points to folder to output
	gulp.watch - watch files and folders for changes

*/

//default task, command to execute: gulp
gulp.task('default', async () => {
	// gulp.src('AdminLTE/dist/css/AdminLTE.min.css')
	// 	.pipe(gulp.dest('public/css'));

	gulp.src('./src/docs/img/*/*')
		.pipe(gulp.dest('public/images'));
});
