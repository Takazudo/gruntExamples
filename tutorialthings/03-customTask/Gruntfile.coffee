# http://gruntjs.com/creating-tasks
#
# =================================
# do
#
# $ npm install
#
# first. Then...
# =================================
# $ grunt
# =================================

module.exports = (grunt) ->
  
  grunt.initConfig
    addTwo:
      nums: [ 10, 20 ]

  grunt.registerTask 'add', 'jsut add nums', (num1, num2) ->
    res = num1*1 + num2*1
    grunt.log.writeln res

  grunt.registerMultiTask 'addTwo', 'add add yeah.', ->
    grunt.task.run "add:#{@data[0]}:#{@data[1]}"
    
  grunt.registerTask 'default', ['addTwo']
