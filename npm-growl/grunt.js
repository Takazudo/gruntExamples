/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-growl'); // https://github.com/alextucker/grunt-growl

  grunt.initConfig({
    growl: {
      test1: {
        message: 'OMG!!!',
        title: 'WOOOOT!!'
      }
    }
  });

  grunt.registerTask('default', 'growl');

};
