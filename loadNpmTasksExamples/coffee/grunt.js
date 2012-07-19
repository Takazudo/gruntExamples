/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-growl'); // https://github.com/alextucker/grunt-growl
  grunt.loadNpmTasks('grunt-coffee'); // https://github.com/avalade/grunt-coffee

  grunt.initConfig({
    growl: {
      done: {
        title: 'grunt',
        message: 'SUCCESSED!!'
      }
    },
    coffee: {
      app: {
        src: [
          'coffee/1.coffee',
          'coffee/2.coffee'
        ],
        dest: 'js'
      }
    },
    watch: {
      app: {
        files: '<config:coffee.app.src>',
        tasks: 'coffee:app growl'
      }
    }
  });

  grunt.registerTask('default', 'coffee growl');

};
