const gulp=require('gulp');
const sass=require('gulp-sass')
const connect=require('gulp-connect');
gulp.task('serve',['sass'],()=>{
    connect.server({
        root:'./',
        port:3000,
        livereload:true
    })
    gulp.watch(['index.html','./css/index.css','./js/*.js'],['html'])
    gulp.watch(['./sass/*.scss'],['sass']);
})
gulp.task('html',()=>{
    gulp.src('./index.html').pipe(connect.reload())
   
})

gulp.task('sass',()=>{
    gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})