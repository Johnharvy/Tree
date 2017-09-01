var gulp = require("gulp");
var less = require("gulp-less");
var sourceMap = require("gulp-sourcemaps");
var plumber = require('gulp-plumber') , notify = require("gulp-notify");

//编译less
gulp.task("less",function(){
     gulp.src("./less/main.less")
     .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')})) //提示错误
     .pipe(less()) 
     .pipe(sourceMap.write())  //变异后保持映射关系
     .pipe(gulp.dest("./css"))
});

gulp.task('default',["less"],function(){
     gulp.watch('./less/*.less',['less']) //监控less变化
});