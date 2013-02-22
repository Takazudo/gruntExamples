module.exports = (grunt) ->

  utils = (require '../misc/commonutils')(grunt)

  grunt.registerMultiTask 'growl', 'growl message.', ->
    utils.growl @data.title, @data.msg
    @
