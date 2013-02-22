/**
 * grunt
 */
module.exports = function(grunt){

  grunt.initConfig({
    coffee: {
      all: {
        dir: './'
      }
    },
    watch: {
      coffee: {
        files: '*.coffee',
        tasks: 'coffee:all ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'coffee ok');

};
