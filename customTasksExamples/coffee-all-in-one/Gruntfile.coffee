# =================================
# do
#
# install growlnotify
#
# $ npm install -g coffee-script
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

  grunt.initConfig
    growl:
      ok:
        title: 'COMPLETE!!'
        msg: '＼(^o^)／'

    coffee:

      # Example1: compile multiple coffees to one js with "--join".
      dist1:
        files: [
          'coffee/1.coffee'
          'coffee/2.coffee'
        ]
        dest: 'js/12.js'

      # Example2: compile one coffee to one js.
      dist2:
        files: [
          'coffee/3.coffee'
        ]
        dest: 'js/3.js'

      # Example3: compiled files are put in another dir.
      dist3:
        dir: 'coffee/45/'
        dest: 'js/'
      
      # Example4: compiled files are put in the same dir.
      dist4:
        dir: 'insamedir/'

      # Example5: --bare
      dist5:
        options:
          bare: true
        files: [
          'coffee/1.coffee'
          'coffee/2.coffee'
        ]
        dest: 'js/12bare.js'

    watch:

      dist1:
        files: '<%= coffee.dist1.files %>'
        tasks: [ 'coffee:dist1', 'growl:ok' ]

      dist2:
        files: '<%= coffee.dist2.files %>'
        tasks: [ 'coffee:dist2', 'growl:ok' ]

      dist3:
        files: 'coffee/45/*.coffee'
        tasks: [ 'coffee:dist3', 'growl:ok' ]

      dist4:
        files: 'insamedir/*.coffee'
        tasks: [ 'coffee:dist4', 'growl:ok' ]

  grunt.event.on 'coffee.error', (msg) ->
    utils.growl 'ERROR!!', msg

  grunt.registerTask 'default', ['coffee', 'growl:ok']

