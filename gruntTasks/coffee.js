/**
 * coffee
 * CoffeeScript: http://coffeescript.org/
 */
module.exports = function(grunt){
  
  var log = grunt.log;
  var _ = grunt.utils._;

  function handleResult(srcval, dest, err, stdout, code, done) {
    if(err){
      grunt.helper('growl', 'COFFEE COMPILING GOT ERROR', stdout);
      log.writeln(srcval + ': failed to compile to ' + dest + '.');
      log.writeln(stdout);
      done(false);
    }else{
      log.writeln(srcval + ': compiled to ' + dest + '.');
      done(true);
    }
  }

  grunt.registerHelper('coffee_dir_to_dir', function(src, dest, done) {
    var args = {
      cmd: 'coffee',
      args: [ '--compile', '--output', dest, src ]
    };
    grunt.helper('exec', args, function(err, stdout, code){
      handleResult(src, dest, err, stdout, code, done);
    });
  });

  grunt.registerHelper('coffee_multi_to_one', function(srcs, dest, done) {
    srcs = srcs.join(' ');
    var args = {
      cmd: 'coffee',
      args: [ '--join', dest, '--compile', srcs ]
    };
    grunt.helper('exec', args, function(err, stdout, code){
      handleResult(srcs, dest, err, stdout, code, done);
    });
  });

  grunt.registerMultiTask('coffee', 'compile CoffeeScripts', function() {
    var done = this.async();
    var files = this.data.files;
    var dest = this.data.dest;

    // if it was string, compile whole directory.
    // ex: ./coffee -> ./js
    if(_.isString(files)) {
      grunt.helper('coffee_dir_to_dir', files, dest, done);
      return;
    }

    // if it was array, join them.
    // ex: [ '1.coffee', '2.coffee' ] -> foo.js
    if(_.isArray(files)) {
      grunt.helper('coffee_multi_to_one', files, dest, done);
      return;
    }

  });

};
