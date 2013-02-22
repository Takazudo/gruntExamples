# =================================
# do
#
# $ npm install
#
# Then...
# =================================
# $ grunt
# =================================

module.exports = (grunt) ->
  
  grunt.task.loadNpmTasks 'grunt-contrib-concat'

  grunt.initConfig

    concat:
      dist1:
        src: [
          'files/1.txt'
          'files/2.txt'
        ]
        dest: 'files/1+2.txt'

  grunt.registerTask 'default', [ 'concat' ]

