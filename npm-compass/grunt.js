/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-growl'); // https://github.com/alextucker/grunt-growl
  grunt.loadNpmTasks('grunt-compass'); // https://github.com/kahlil/grunt-compass

  grunt.initConfig({
    growl: {
      done: {
        title: 'grunt',
        message: 'SUCCESSED!!'
      }
    },
    compass: {
      app: {
        src: 'scss/',
        dest: 'css/'
      }
    },
    watch: {
      app: {
        files: 'scss/*',
        tasks: 'compass:app growl:done'
      }
    }
  });

  grunt.registerTask('default', 'compass growl:done');

};
