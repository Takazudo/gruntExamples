module.exports = (grunt) ->
  
  grunt.task.loadNpmTasks 'grunt-contrib-compress'

  grunt.initConfig

    compress:
      main:
        options:
          archive: 'foo.zip'
        expand: true
        cwd: 'files/'
        src: '**'
        dest: 'zipped/'

  grunt.registerTask 'default', [ 'compress' ]

