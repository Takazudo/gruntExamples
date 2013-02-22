module.exports = (grunt) ->
  
  log = grunt.log

  utils = (require '../misc/commonutils')(grunt)

  grunt.registerMultiTask "sass", "compile sass files.", ->

    done = @async()
    src = @data.src
    dest = @data.dest
    
    cmd = "sass #{src} #{dest}"

    utils.invokeCommand cmd,
      onstdout: (output) ->
        log.writeln output
      onstderr: (output) ->
        log.writeln output
        grunt.event.emit 'sass.error', output
      onsuccess: ->
        log.writeln "#{src}: compiled to #{dest}"
        done true
      onfail: ->
        log.writeln "#{src}: failed compiling to #{dest}"
        done false
    @
