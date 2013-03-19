module.exports = (grunt) ->
  
  log = grunt.log

  utils = (require '../misc/commonutils')(grunt)

  grunt.registerMultiTask 'utf8tosjis', 'convert UTF8 to SJIS', ->
    
    done = @async()
    src = @data.src
    dest = @data.dest
    
    cmd = "iconv -c -f UTF8 -t CP932 < #{src} > #{dest}"

    utils.invokeCommand cmd,
      onstdout: (output) ->
        log.writeln output
      onstderr: (output) ->
        log.writeln output
        grunt.event.emit 'utf8tosjis.error', output
      onsuccess: ->
        log.writeln "#{src}: converted to #{dest}"
        done true
      onfail: ->
        log.writeln "#{src}: failed converting to #{dest}"
        done false
    
    return this

