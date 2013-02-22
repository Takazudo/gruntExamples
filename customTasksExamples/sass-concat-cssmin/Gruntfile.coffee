# =================================
# do
#
# install growlnotify
# install sass (Ruby)
#
# $ npm install
#
# Then...
# =================================
# $ grunt
# =================================

module.exports = (grunt) ->
  
  utils = (require './gruntcomponents/misc/commonutils')(grunt)
  grunt.task.loadTasks 'gruntcomponents/tasks'
  grunt.task.loadNpmTasks 'grunt-contrib-watch'
  grunt.task.loadNpmTasks 'grunt-contrib-concat'
  grunt.task.loadNpmTasks 'grunt-contrib-cssmin'

  grunt.initConfig
    growl:
      ok:
        title: 'COMPLETE!!'
        msg: '＼(^o^)／'

    sass:
      dist1:
        src: "scss/1.scss"
        dest: "css/1.css"

      dist2:
        src: "scss/2.scss"
        dest: "css/2.css"

    concat:
      all:
        src: [
          '<%= sass.dist1.dest %>'
          '<%= sass.dist2.dest %>'
        ]
        dest: "css/all.css"

    cssmin:
      compress:
        files:
          'css/all.min.css': [ '<%= concat.all.dest %>' ]

    watch:
      dist1:
        files: '<%= sass.dist1.src %>'
        tasks: ['sass:dist1', 'concat', 'cssmin', 'growl:ok']

      dist2:
        files: '<%= sass.dist2.src %>'
        tasks: ['sass:dist2', 'concat', 'cssmin', 'growl:ok']

  grunt.event.on 'sass.error', (msg) ->
    utils.growl 'ERROR!!', msg

  grunt.registerTask 'default', [ 'sass', 'concat', 'cssmin', 'growl:ok' ]

