/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-growl'); // https://github.com/alextucker/grunt-growl

  grunt.initConfig({
    growl: {
      ok: {
        title: 'grunt.js',
        message: 'OK!'
      }
    }
  });

  grunt.registerTask('default', 'growl');

};
