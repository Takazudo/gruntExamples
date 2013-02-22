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
    dosomething:
      task1:
        options:
          prop: 'val'
        src: 'foo.js'
        dest: 'foo.min.js'

  grunt.registerMultiTask 'dosomething', 'do something.', ->
    console.log @data.src
    console.log @data.dest
    console.log @data.options
    
  grunt.registerTask 'default', ['dosomething']
