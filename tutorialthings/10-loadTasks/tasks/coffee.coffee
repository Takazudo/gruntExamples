module.exports = (grunt) ->
  
  exec = (require 'child_process').exec

  grunt.registerMultiTask 'coffee', 'do something.', ->
    
    done = @async()

    # $ coffee --output files --compile files/test.coffee 
    cmd = "coffee --output #{@data.dest} --compile #{@data.src}"

    coffee = exec cmd

    coffee.stdout.on 'data', (data) ->
      grunt.log.writeln '==== stdout ===='
      grunt.log.writeln data

    coffee.stderr.on 'data', (data) ->
      grunt.log.writeln '==== stderr ===='
      grunt.log.writeln data

    coffee.on 'exit', (code) ->
      grunt.log.writeln '==== exit ===='
      if code is 0
        done true
      else
        done false
