module.exports = (grunt) ->
  
  grunt.task.loadNpmTasks 'grunt-contrib-compress'

  grunt.initConfig

    compress:
      main:
        options:
          mode: 'zip'
          archive: 'foo.zip'
        src: 'files/**'
        dest: 'zipped/'

  grunt.registerTask 'default', [ 'compress' ]

