/**
 * grunt
 * https://github.com/cowboy/grunt
 */
module.exports = function(grunt){
  
  grunt.loadNpmTasks('grunt-contrib'); // https://github.com/gruntjs/grunt-contrib

  grunt.initConfig({
    clean: {
      removeMeBaby: [
        './removeMeBaby'
      ],
      removeFileInDir: [
        './dir1/1.txt',
        './dir1/2.txt',
        './dir2/1.txt',
        './dir2/2.txt'
      ]
    }
  });

  grunt.registerTask('default', 'clean');

};
