/**
 * utf8tosjis tasks
 * using iconv
 */
module.exports = function(grunt){
  
  var log = grunt.log;

  function handleResult(from, dest, err, stdout, code, done) {
    if(err){
      grunt.helper('growl', 'utf8tosjis GOT ERROR', stdout);
      log.writeln(from + ': failed to compile to ' + dest + '.');
      log.writeln(stdout);
      done(false);
    }else{
      log.writeln(from + ': compiled to ' + dest + '.');
      done(true);
    }
  }

  grunt.registerHelper('utf8tosjis', function(src, dest, done) {
    var args = {
      cmd: 'iconv -c -f UTF8 -t CP932 < ' + src + ' > ' + dest
    };
    grunt.helper('exec', args, function(err, stdout, code){
      handleResult(src, dest, err, stdout, code, done);
    });
    return true;
  });

  grunt.registerMultiTask('utf8tosjis', 'minify css by sqwish', function() {
    var done = this.async();
    var src = this.data.src;
    var dest = this.data.dest;
    grunt.helper('utf8tosjis', src, dest, done);
    return true;
  });

};
