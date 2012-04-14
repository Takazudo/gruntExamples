/**
 * grunt
 * compass example
 */
module.exports = function(grunt){

  var proc = require('child_process');
  var log = grunt.log;

  grunt.initConfig({
    compass: {
      dist1: { src: 'scss/', dest: 'css/' }
    },
    concat:  {
      all: {
        src: [
          'css/1.css',
          'css/2.css'
        ],
        dest: 'css/all.css'
      }
    },
    cssmin: {
      all: {
        src: '<config:concat.all.dest>',
        dest: 'css/all.min.css'
      }
    },
    watch: {
      dist1: {
        files: 'scss/*.scss',
        tasks: 'compass:dist1 concat cssmin ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'compass concat cssmin ok');

};
