/**
 * bourbon compiling tasks
 * sass: http://sass-lang.com/
 * Bourbon: http://thoughtbot.com/bourbon/
 */
module.exports = function(grunt){
  
  var path_bourbon = 'scss/bourbon/lib/bourbon.rb'; // configure this
  
  var log = grunt.log;

  function handleResult(from, dest, err, stdout, code, done) {
    if(err){
      grunt.helper('growl', 'BOURBON COMPILING GOT ERROR', stdout);
      log.writeln(from + ': failed to compile to ' + dest + '.');
      log.writeln(stdout);
      done(false);
    }else{
      log.writeln(from + ': compiled to ' + dest + '.');
      done(true);
    }
  }

  grunt.registerHelper('bourbon', function(src, dest, done) {
    var args = {
      cmd: 'sass',
      args: [ '-r', path_bourbon, src, dest ]
    };
    grunt.helper('exec', args, function(err, stdout, code){
      handleResult(src, dest, err, stdout, code, done);
    });
    return true;
  });

  grunt.registerMultiTask('bourbon', 'compile sass with bourbon', function() {
    var done = this.async();
    var src = this.data.src;
    var dest = this.data.dest;
    grunt.helper('bourbon', src, dest, done);
    return true;
  });

};
