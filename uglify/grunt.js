/**
 * grunt
 * uglifyjs example
 */
module.exports = function(grunt){

  grunt.initConfig({
    uglify: {
      dist1: { src: 'js/1.js', dest: 'js/1.min.js' },
      dist2: { src: 'js/2.js', dest: 'js/2.min.js' }
    },
    watch: {
      dist1: {
        files: '<config:uglify.dist1.src>',
        tasks: 'uglify:dist1 concat cssmin ok'
      },
      dist2: {
        files: '<config:uglify.dist2.src>',
        tasks: 'uglify:dist2 concat cssmin ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'uglify ok');

};
