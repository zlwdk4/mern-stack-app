var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('live-server', function () {
    var server = new LiveServer('server/main.js');
    server.start();
});

gulp.task('serve', ['live-server'], function(){
    browserSync.init(null , { //passing a null means that we already have our server going
        proxy: "http://localhost:7777", //this will be where the view will be at --- where you see server
        port: 9001 //port for new connection
    });
});
