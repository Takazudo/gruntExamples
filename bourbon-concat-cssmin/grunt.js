/**
 * grunt
 * bourbon example
 */
module.exports = function(grunt){

  grunt.initConfig({
    bourbon: {
      dist1: { src: 'scss/1.scss', dest: 'css/1.css' },
      dist2: { src: 'scss/2.scss', dest: 'css/2.css' }
    },
    concat:  {
      all: {
        src: [
          '<config:bourbon.dist1.dest>',
          '<config:bourbon.dist2.dest>'
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
        files: '<config:bourbon.dist1.src>',
        tasks: 'bourbon:dist1 concat cssmin ok'
      },
      dist2: {
        files: '<config:bourbon.dist2.src>',
        tasks: 'bourbon:dist2 concat cssmin ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'bourbon concat cssmin ok');

};
