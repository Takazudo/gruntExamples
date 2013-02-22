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
  
  grunt.task.loadNpmTasks 'grunt-contrib-uglify'

  grunt.initConfig

    uglify:
      dist1:
        options:
          preserveComments: 'some'
        src: [ 'files/jquery.js' ]
        dest: 'files/jquery.min.js'

  grunt.registerTask 'default', [ 'uglify' ]

