# http://gruntjs.com/api/grunt.task
#
# =================================
# do
#
# $ npm install -g coffee-script
# $ npm install
#
# first. Then...
# =================================
# $ grunt
# =================================

module.exports = (grunt) ->
  
  grunt.task.loadTasks 'tasks'

  grunt.initConfig
    coffee:
      subtask1:
        src: 'files/test.coffee'
        dest: 'files'

  grunt.registerTask 'default', ['coffee']
