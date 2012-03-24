/**
 * grunt
 * compass example
 *
 * grunt: https://github.com/cowboy/grunt
 * compass: http://compass-style.org/
 * sqwish: https://github.com/ded/sqwish
 * growlnotify: http://growl.info/extras.php#growlnotify
 */
module.exports = function(grunt){

  var proc = require('child_process');
  var log = grunt.log;

  grunt.initConfig({
    watch: {
      files: [
        'scss/*.scss'
      ],
      tasks: 'compass concat cssmin notifyOK'
    },
    compass: {
      'css/': 'scss/'
    },
    concat:  {
      'css/all.css' : [
        'css/1.css',
        'css/2.css'
      ]
    },
    cssmin: {
      'css/all.min.css': 'css/all.css'
    }
  });

  grunt.registerMultiTask('compass', 'compass compile', function() {
    var done = this.async();
    var src = this.file.src;
    var dest = this.file.dest;
    var command = 'compass compile --sass-dir ' + src + ' --css-dir ' + dest + ' --boring';
    proc.exec(command, function(err, sout, serr){
      if(sout.indexOf('error')>-1){
        proc.exec("growlnotify -t 'COMPASS COMPILE ERROR!!!' -m '" + sout.replace(/^\s*/,'') + "'");
        log.writeln('SCSSs in ' + src + ' were failed to compile to ' + dest + '.');
        done(false);
      }else{
        log.writeln('SCSSs in ' + src + ' were compiled to ' + dest + '.');
        done(true);
      }
    });
  });

  grunt.registerMultiTask('cssmin', 'minify css', function() {
    var done = this.async();
    var src = this.file.src;
    var dest = this.file.dest;
    var command = 'sqwish ' + src + ' -o ' + dest;
    var out = proc.exec(command, function(err, sout, serr){
        log.writeln('File ' + dest + ' created.');
        done(true);
    });
  });

  grunt.registerTask('notifyOK', 'done!', function(){
    proc.exec("growlnotify -t 'grunt.js' -m '＼(^o^)／'");
  });

  grunt.registerTask('default', 'compass concat cssmin notifyOK');

};
