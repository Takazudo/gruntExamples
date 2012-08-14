/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-contrib'); // https://github.com/gruntjs/grunt-contrib

  grunt.initConfig({
    mincss: {
      style: {
        files: {
          './css/style.min.css': './css/style.css'
        }
      }
    }
  });

  grunt.registerTask('default', 'mincss');

};
