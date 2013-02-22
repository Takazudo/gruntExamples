# http://gruntjs.com/creating-tasks
#
# =================================
# do
#
# $ npm install
#
# first. Then...
# =================================
# $ grunt log
#
# will write followings.
#
# Running "log:foo" (log) task
# foo: 1,2,3
# 
# Running "log:bar" (log) task
# bar: hello world
# 
# Running "log:baz" (log) task
# baz: false
#
# =================================
# $ grunt
#
# does same too.
# =================================

module.exports = (grunt) ->
  
  grunt.initConfig
    log:
      foo: [1, 2, 3]
      bar: 'hello world'
      baz: false

  grunt.registerMultiTask 'log', 'Log stuff.', ->
    grunt.log.writeln "#{@target}: #{@data}"

  grunt.registerTask 'default', ['log']
