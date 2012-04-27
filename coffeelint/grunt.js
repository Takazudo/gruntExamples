/**
 * grunt
 * coffeelint example
 */
module.exports = function(grunt){

  grunt.initConfig({
    coffeelint: {
      dist1: {
        files: [ 'coffee/1.coffee', 'coffee/2.coffee' ]
      }
    },
    watch: {
      dist1: {
        files: '<config:coffeelint.dist1.files>',
        tasks: 'coffeelint:dist1 ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'coffeelint ok');

};
