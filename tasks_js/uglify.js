/**
 * uglifyjs tasks
 * UglifyJS: https://github.com/mishoo/UglifyJS
 */
module.exports = function(grunt){
  
  var log = grunt.log;

  function handleResult(from, dest, err, stdout, code, done) {
    if(err){
      grunt.helper('growl', 'UGLIFYJS GOT ERROR', stdout);
      log.writeln(from + ': failed to compile to ' + dest + '.');
      log.writeln(stdout);
      done(false);
    }else{
      log.writeln(from + ': compiled to ' + dest + '.');
      done(true);
    }
  }

  grunt.registerHelper('uglify', function(src, dest, done) {
    var args = {
      cmd: 'uglifyjs',
      args: [ '-o', dest, src ]
    };
    grunt.helper('exec', args, function(err, stdout, code){
      handleResult(src, dest, err, stdout, code, done);
    });
    return true;
  });

  grunt.registerMultiTask('uglify', 'minify css by sqwish', function() {
    var done = this.async();
    var src = this.data.src;
    var dest = this.data.dest;
    grunt.helper('uglify', src, dest, done);
    return true;
  });

};
