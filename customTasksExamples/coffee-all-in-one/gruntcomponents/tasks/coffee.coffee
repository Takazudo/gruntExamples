module.exports = (grunt) ->
  
  log = grunt.log

  utils = (require '../misc/commonutils')(grunt)

  applyOptions = (cmd, options) ->
    if options?.bare
      cmd = cmd.replace /^coffee/, 'coffee --bare'
    cmd

  createInvokeCommandCallbacks = (from, to, done) ->
    {
      onstdout: (output) ->
        log.writeln output
      onstderr: (output) ->
        log.writeln output
        grunt.event.emit 'coffee.error', output
      onsuccess: ->
        log.writeln "#{from}: compiled to #{to}"
        done true
      onfail: ->
        log.writeln "#{from}: failed compiling to #{to}"
        done false
    }

  coffee_dir_to_dir = (fromDir, dest, done, options) ->
    cmd = "coffee --compile --output #{dest} #{fromDir}"
    cmd = applyOptions cmd, options
    callbacks = createInvokeCommandCallbacks fromDir, dest, done
    utils.invokeCommand cmd, callbacks
    @

  coffee_multi_to_one = (srcs, dest, done, options) ->
    cmd = "coffee --join #{dest} --compile #{srcs.join(' ')}"
    cmd = applyOptions cmd, options
    callbacks = createInvokeCommandCallbacks (srcs.join '\n'), dest, done
    utils.invokeCommand cmd, callbacks
    @

  grunt.registerMultiTask "coffee", "compile CoffeeScript files.", ->

    done = @async()
    files = @data.files
    dir = @data.dir
    dest = @data.dest
    options = @data.options or null
    
    # ex: ./coffee -> ./js
    if dir

      # if destination was not defined, compile to same dir
      dest = dir unless dest?

      coffee_dir_to_dir dir, dest, done, options

      return
    
    # ex: [ '1.coffee', '2.coffee' ] -> foo.js
    if files

      coffee_multi_to_one files, dest, done, options

      return

    @
