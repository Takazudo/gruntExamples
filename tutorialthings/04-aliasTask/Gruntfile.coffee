# http://gruntjs.com/creating-tasks
#
# =================================
# do
#
# $ npm install
#
# first. Then...
# =================================
# $ grunt sayAll
#
# Running "say:foo" (say) task
# foo: hello world
# 
# Running "sayTwice:foo" (sayTwice) task
# foo: hello hello
# =================================

module.exports = (grunt) ->
  
  grunt.initConfig
    say:
      foo: 'hello world'
    sayTwice:
      foo: 'hello'

  grunt.registerMultiTask 'say', 'Just say.', ->
    grunt.log.writeln "#{@target}: #{@data}"

  grunt.registerMultiTask 'sayTwice', 'Just say.', ->
    grunt.log.writeln "#{@target}: #{@data} #{@data}"

  # make alias 'sayAll' which does two tasks.
  grunt.registerTask 'sayAll', ['say', 'sayTwice:foo']
