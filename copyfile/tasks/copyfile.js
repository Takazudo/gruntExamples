/**
 * coffee compiling tasks
 * CoffeeScript: http://coffeescript.org/
 */
module.exports = function(grunt){
  
  var log = grunt.log;

  // path manipulators

  function isDir(path) {
    return (/\/$/).test(path);
  }
  function parseFileName(path) {
    return path.match(/[^\/]+$/)[0];
  }
  function isConfigValid(fromFiles, to) {
    if( (fromFiles.length > 1) && !isDir(to) ) {
        return false;
    }
    return true;
  }

  // surface

  grunt.registerMultiTask( "copy", "just copy", function() {

    var from = this.data.from;
    var fromFiles = grunt.file.expand(from);
    var to = this.data.to;

    // if "from" was plural, "to" needs to be a directory
    if(!isConfigValid(fromFiles, to)) {
      return false;
    }

    // copy each
    fromFiles.forEach(function(file) {
      var dest;
      if(isDir(to)) {
        dest = to + parseFileName(file);
      } else {
        dest = to;
      }
      grunt.file.copy(file, dest);
      log.writeln('file copied - from: ' + file + ' to: ' + dest);
    });

    return true;

  });

};
