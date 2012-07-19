/**
 * grunt
 * sass example
 */
module.exports = function(grunt){

  grunt.initConfig({
    sass: {
      dist1: { src: 'scss/1.scss', dest: 'css/1.css' },
      dist2: { src: 'scss/2.scss', dest: 'css/2.css' }
    },
    concat:  {
      all: {
        src: [
          '<config:sass.dist1.dest>',
          '<config:sass.dist2.dest>'
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
        files: '<config:sass.dist1.src>',
        tasks: 'sass:dist1 concat cssmin ok'
      },
      dist2: {
        files: '<config:sass.dist2.src>',
        tasks: 'sass:dist2 concat cssmin ok'
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'sass concat cssmin ok');

};
