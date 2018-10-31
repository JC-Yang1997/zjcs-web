var gulp = require("gulp"),
connect = require("gulp-connect");

//启动服务器
gulp.task("connect",function(){
	connect.server({
		root:"dist",
		livereload:true,
		host:'0.0.0.0',
		port:8001
	});
});

//编译*.css文件为*.css文件
gulp.task("css",function(){
	gulp.src("src/css/*.css")
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
});

//复制js文件到dist目录下，让js修改后能够重新加载 
gulp.task("js",function(){
	gulp.src("src/js/**/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());//浏览器自动刷新
});

//复制 HTML文件到 dist目录下，让HTML页面修改后自动加载
gulp.task("html",function(){
	gulp.src("src/**/*.html")
	.pipe(gulp.dest("dist/"))
	.pipe(connect.reload());
});

//复制lib目录到dist下
gulp.task("copy-lib",function(){
	gulp.src("src/lib/**/*.*")
	.pipe(gulp.dest("dist/lib"));
});

//复制images目录到dist下
gulp.task("copy-images",function(){
	gulp.src("src/images/**/*.*")
	.pipe(gulp.dest("dist/images"));
});

//复制mock(假数据-json文件)目录到dist下
gulp.task("copy-mock",function(){
	gulp.src("src/mock/**/*.*")
	.pipe(gulp.dest("dist/mock"));
});

//监视文件的修改
gulp.task("watch",function(){
	gulp.watch("src/css/*.css",["css"]);
	gulp.watch("src/**/*.html",["html"]);
	gulp.watch("src/**/*.js",["js"]);
});

//输入gulp命令后执行的任务
gulp.task("copy",["copy-lib","copy-images","copy-mock"]);
gulp.task("default",["html","css","js","copy","connect","watch"]);