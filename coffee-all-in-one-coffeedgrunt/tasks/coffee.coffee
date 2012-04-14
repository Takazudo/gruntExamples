module.exports = (grunt) ->

  log = grunt.log

  # handle compiler results

  handleResult = (from, dest, err, stdout, code, done) ->
    if err
      grunt.helper "growl", "COFFEE COMPILING GOT ERROR", stdout
      log.writeln from + ": failed to compile to " + dest + "."
      log.writeln stdout
      done false
    else
      log.writeln from + ": compiled to " + dest + "."
      done true

  # concrete coffee compiling helpers

  grunt.registerHelper "coffee_dir_to_dir", (fromdir, dest, done) ->
    args =
      cmd: "coffee --compile --output #{dest} #{fromdir}"
    grunt.helper "exec", args, (err, stdout, code) ->
      handleResult fromdir, dest, err, stdout, code, done

  grunt.registerHelper "coffee_multi_to_one", (srcs, dest, done) ->
    srcs = srcs.join(" ")
    args =
      cmd: "coffee --join #{dest} --compile #{srcs}"
    grunt.helper "exec", args, (err, stdout, code) ->
      handleResult srcs, dest, err, stdout, code, done

  # surface

  grunt.registerMultiTask "coffee", "compile CoffeeScripts", ->
    done = @async()
    files = @data.files
    dir = @data.dir
    dest = @data.dest

    # branch coffee compiling strategy

    # ex: ./coffee -> ./js
    if dir
      # if destination was not defined, compile to same dir
      unless dest then dest = dir
      grunt.helper "coffee_dir_to_dir", dir, dest, done
      return
    # ex: [ '1.coffee', '2.coffee' ] -> foo.js
    if files
      grunt.helper "coffee_multi_to_one", files, dest, done
      return

