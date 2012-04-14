module.exports = (grunt) ->
  
  exec = require("child_process").exec

  # child_process.exec bridge

  grunt.registerHelper "exec", (opts, done) ->
    exec opts.cmd, opts.opts, (code, stdout, stderr) ->
      return  unless done
      if code is 0
        done null, stdout, code
      else
        done code, stderr, code

  # growl: Ex. grunt.helper 'growl', 'foo', 'bar'
  # http://growl.info/extras.php#growlnotify

  grunt.registerHelper "growl", (title, msg) ->
    grunt.helper "exec",
      cmd: "growlnotify -t '#{title}' -m '#{msg}'"

  # ok: use this for notify everything are allright.

  grunt.registerTask "ok", "done!", ->
    grunt.helper "growl", "grunt.js", "＼(^o^)／"
