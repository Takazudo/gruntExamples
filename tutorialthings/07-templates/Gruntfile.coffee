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
    pkg: grunt.file.readJSON('package.json'),
    say:
      myname: 'My name is <%= name %>'
      project: 'The name of this project is <%= pkg.name %>'
    name: 'Takazudo'

  grunt.registerMultiTask 'say', 'say something.', ->
    grunt.log.writeln @data
    
  grunt.registerTask 'default', ['say']
