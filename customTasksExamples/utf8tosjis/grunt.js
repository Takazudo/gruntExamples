/**
 * grunt
 * utf8tosjis example
 */
module.exports = function(grunt){

  grunt.initConfig({
    utf8tosjis: {
      dist1: {
        src: 'convertme.txt',
        dest: 'convertme_result.txt'
      }
    },
    watch: {
      dist1: {
        files: '<config:utf8tosjis.dist1.src>',
        tasks: 'utf8tosjis:dist1 ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'utf8tosjis ok');

};
