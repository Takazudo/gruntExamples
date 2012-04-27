/**
 * grunt
 * coffeelint-compile example
 */
module.exports = function(grunt){

  grunt.initConfig({
    coffee: {
      dist1: {
        files: [ 'coffee/1.coffee', 'coffee/2.coffee' ],
        dest: 'js/1+2.js'
      }
    },
    coffeelint: {
      dist1: {
        files: '<config:coffee.dist1.files>'
      }
    },
    watch: {
      dist1: {
        files: '<config:coffee.dist1.files>',
        tasks: 'coffeelint:dist1 coffee:dist1 ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'coffeelint coffee ok');

};
