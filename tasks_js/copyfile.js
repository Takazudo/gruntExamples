/**
 * copyfile tasks
 */
module.exports = function(grunt){
  
  var log = grunt.log;
  var _ = grunt.utils._;

  // path manipulators

  function isDir(path) {
    return (/\/$/).test(path);
  }

  function parseFileName(path) {
    return path.match(/[^\/]+$/)[0];
  }

  function isConfigValid(from, to) {

    var isWildCarded = from.indexOf('*') > -1;
    var isFromDirective = (/^<.+>$/).test(from);
    var isFromArray = _.isArray(from);
    var isToDir = isDir(to);
    var isFromPlural = false;

    if(isFromArray) {
      isFromPlural = true;
    } else if(isFromDirective) {
      if(grunt.file.expand(from).length > 1) {
        isFromPlural = true;
      }
    }

    // if "from" was plural, "to" must refer directory
    if( (isWildCarded || isFromArray) && isFromPlural && !isToDir) {
      return false;
    }
    return true;

  }

  // main copy process

  grunt.registerHelper('copy', function(from, to){

    if(!isConfigValid(from, to)) {
      grunt.helper('growl', 'COPYFILE GOT ERROR', 'config invalid. from: ' + from + ' to: ' + to);
      return false;
    }

    var fromFiles = grunt.file.expand(from);

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

  // surface

  grunt.registerMultiTask('copy', 'just copy', function() {
    return grunt.helper('copy', this.data.from, this.data.to);
  });

};
