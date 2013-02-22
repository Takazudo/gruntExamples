/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-contrib'); // https://github.com/gruntjs/grunt-contrib

  grunt.initConfig({
    coffee: {
      test: {
        files: {
          './compiled/1.js': './coffee/1.coffee'
        }
      },
      test2: {
        files: {
          './compiled/2+3.js': [
            './coffee/2.coffee',
            './coffee/3.coffee'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', 'coffee');

};
