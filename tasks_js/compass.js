/**
 * compass compiling tasks
 * compass: http://compass-style.org/
 */
module.exports = function(grunt){
  
  var log = grunt.log;

  function handleResult(from, dest, err, stdout, code, done) {
    if(err){
      grunt.helper('growl', 'COMPASS COMPILING GOT ERROR', stdout);
      log.writeln(from + ': failed to compile to ' + dest + '.');
      log.writeln(stdout);
      done(false);
    }else{
      log.writeln(from + ': compiled to ' + dest + '.');
      done(true);
    }
  }

  grunt.registerHelper('compass', function(src, dest, done) {
    var args = {
      cmd: 'compass',
      args: [ 'compile', '--sass-dir', src, '--css-dir', dest, '--boring' ]
    };
    grunt.helper('exec', args, function(err, stdout, code){
      handleResult(src, dest, err, stdout, code, done);
    });
    return true;
  });

  grunt.registerMultiTask('compass', 'compile compass', function() {
    var done = this.async();
    var src = this.data.src;
    var dest = this.data.dest;
    grunt.helper('compass', src, dest, done);
    return true;
  });

};
