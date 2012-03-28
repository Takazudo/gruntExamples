/**
 * grunt
 * uglifyjs example
 *
 * grunt: https://github.com/cowboy/grunt
 * UglifyJS: https://github.com/mishoo/UglifyJS
 * growlnotify: http://growl.info/extras.php#growlnotify
 */
module.exports = function(grunt){

  var proc = require('child_process');
  var log = grunt.log;

  grunt.initConfig({
    watch: {
      files: [
        'js/*.js'
      ],
      tasks: 'uglify notifyOK'
    },
    uglify: {
      'js/1.min.js': 'js/1.js',
      'js/2.min.js': 'js/2.js'
    }
  });

  grunt.registerMultiTask('uglify', 'minify', function() {
    var done = this.async();
    var src = this.file.src;
    var dest = this.file.dest;
    var command = 'uglifyjs -o ' + dest + ' ' + src;
    var out = proc.exec(command, function(err, sout, serr){
      log.writeln('uglified.');
      done(true);
    });
  });

  grunt.registerTask('notifyOK', 'done!', function(){
    proc.exec("growlnotify -t 'grunt.js' -m '＼(^o^)／'");
  });

  grunt.registerTask('default', 'uglify notifyOK');

};
