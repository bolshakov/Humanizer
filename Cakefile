fs    = require "fs"
sys   = require "sys"
https = require "https"
cs    = require "coffee-script"
path  = require "path"

repo  = "https://github.com/TweeKane/Humanizer"

# Helpers
# -------

exec = (command, callback) ->
  require("child_process").exec command, (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr
    callback() if callback?

copy = (from, to) ->
  exec "cp -r #{from} #{to}"


# Tasks
# -----

task "fetch", "fetch humanizer files from repo", ->
  # Site root.
  www = __dirname
  # Temporary directory.
  dir = "/tmp/#{Math.floor Math.random()*100000}"
  # Clone Humanizer repo
  exec "git clone #{repo} #{dir}", ->
    process.chdir dir
    # FIX: Looks ugly. Seems like its my own problem.
    exec "npm install coffee-script", ->
      exec "cake build", ->
        locales = []
        # Read locales list.
        for filename in fs.readdirSync "#{dir}/lib/locales"
          locales.push filename[10...-3]

        # Copy locales from fetched repo to site dir.
        copy "#{dir}/lib/locales/*", "#{www}/locales"

        # Copy Humanizer library
        copy "#{dir}/lib/humanizer.js*", "#{www}/javascripts"

        # And finally write locales list to file.
        fs.writeFile "#{www}/locales/index.json", JSON.stringify(locales), (err) ->
          throw err if err

