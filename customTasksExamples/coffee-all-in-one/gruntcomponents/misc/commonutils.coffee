module.exports = (grunt) ->

  exec = (require 'child_process').exec

  ###
  usage:
  
  invokeCommand 'ps',
    onstdout: (output) -> ...
    onstderr: (output) -> ...
    onsuccess: -> ...
    onfail: -> ...
    oncomplete: -> ...
  ###

  invokeCommand = (cmd, callbacks) ->

    grunt.log.writeln "$ #{cmd}"
    process = exec cmd

    process.stdout.on 'data', (data) ->
      callbacks.onstdout(data) if callbacks?.onstdout? and data?

    process.stderr.on 'data', (data) ->
      callbacks.onstderr(data) if callbacks?.onstderr? and data?

    process.on 'exit', (code) ->
      if code is 0
        callbacks.onsuccess() if callbacks?.onsuccess?
      else
        callbacks.onfail() if callbacks?.onfail?
      callbacks.oncomplete() if callbacks?.oncomplete?

    @

  trim = (str) ->
    str.replace /"|\n|\`/g, '' # trim hermful chars

  growl = (title, msg) ->
    msg = trim msg
    cmd = "growlnotify -t \"#{title}\" -m \"#{msg}\""
    invokeCommand cmd

  {
    invokeCommand: invokeCommand
    growl: growl
  }

