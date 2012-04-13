module.exports = function(grunt){
  
  var exec = require('child_process').exec;

  // child_process.exec bridge
  grunt.registerHelper('exec', function(opts, done) {
    var command = opts.cmd + ' ' + opts.args.join(' ');
    exec(command, opts.opts, function(code, stdout, stderr) {
      if(!done){
        return;
      }
      if(code === 0) {
        done(null, stdout, code);
      } else {
        done(code, stderr, code);
      }
    });
  });

  // growl
  // Usage: grunt.helper('growl', 'foo', 'bar');
  grunt.registerHelper('growl', function(title, msg) {
    grunt.helper('exec', {
      cmd: 'growlnotify',
      args: [
        '-t', "'" + title + "'",
        '-m', "'" + msg + "'"
      ]
    });
  });

  // ok
  grunt.registerTask('ok', 'done!', function(){
    grunt.helper('growl', 'grunt.js', '＼(^o^)／');
  });

};
