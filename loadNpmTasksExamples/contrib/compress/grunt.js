/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-contrib'); // https://github.com/gruntjs/grunt-contrib

  grunt.initConfig({
    compress: {
      htdocs: {
        options: {
          mode: 'zip'
        },
        files: {
          'htdocs.zip': './htdocs/**'
        }
      }
    }
  });

  grunt.registerTask('default', 'compress');

};
