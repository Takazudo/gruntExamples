module.exports = (grunt) ->
  
  grunt.task.loadTasks 'gruntcomponents/tasks'

  grunt.initConfig
    utf8tosjis:
      dist1:
        src: 'convertme.txt'
        dest: 'convertme_result.txt'

  grunt.registerTask 'default', ['utf8tosjis']

