/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-growl'); // https://github.com/alextucker/grunt-growl
  grunt.loadNpmTasks('grunt-sass'); // https://github.com/sindresorhus/grunt-sass

  grunt.initConfig({
    growl: {
      done: {
        title: 'grunt',
        message: 'SUCCESSED!!'
      }
    },
    sass: {
      app: {
        src: 'scss/style.scss',
        dest: 'css/style.css'
      }
    },
    watch: {
      app: {
        files: 'scss/*',
        tasks: 'sass:app growl:done'
      }
    }
  });

  grunt.registerTask('default', 'sass growl:done');

};
