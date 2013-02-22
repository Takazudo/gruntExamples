# http://gruntjs.com/getting-started
#
# =================================
# do
#
# $ npm install
#
# first. Then...
# =================================
# $ grunt uglify
#
# will minify hoge.js to hoge.min.js
# =================================
# $ grunt
#
# does same too.
# =================================

module.exports = (grunt) ->

  # Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks 'grunt-contrib-uglify'

  # init
  grunt.initConfig
    uglify:
      build:
        src: 'testfiles/hoge.js'
        dest: 'testfiles/hoge.min.js'

  # default task
  grunt.registerTask 'default', ['uglify']
