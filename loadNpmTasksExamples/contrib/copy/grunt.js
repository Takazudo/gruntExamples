/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-contrib'); // https://github.com/gruntjs/grunt-contrib

  grunt.initConfig({
    copy: {
      fileTest: {
        files: {
          './to/': './from/1.txt'
        }
      },
      fileTest2: {
        files: {
          './to/': [ './from/2.txt', './from/3.txt' ]
        }
      },
      dirTest1: {
        files: {
          './to/4/': [ './from/4/**' ]
        }
      }
    }
  });

  grunt.registerTask('default', 'copy');

};
