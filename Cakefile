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

codes =
  ar : "Arabic"
  bg : "Bulgarian"
  ca : "Catalan"
  zh_cn : "Chinese (simplified)"
  zh_tw : "Chinese (traditional)"
  hr : "Croatian"
  cs : "Czech"
  cz : "Czech" # Padrino bug
  da : "Danish"
  nl : "Dutch"
  en : "English"
  et : "Estonian"
  tl : "Filipino"
  fi : "Finnish"
  fr : "French"
  de : "German"
  el : "Greek"
  iw : "Hebrew"
  hi : "Hindi"
  hu : "Hungarian"
  "is" : "Icelandic"
  id : "Indonesian"
  it : "Italian"
  ja : "Japanese"
  ko : "Korean"
  lv : "Latvian"
  lt : "Lithuanian"
  no : "Norwegian"
  pl : "Polish"
  pt_br : "Portuguese (Brazil)"
  pt_pr : "Portuguese (Portugal)"
  pt : "Portuguese"
  ro : "Romanian"
  ru : "Russian"
  sr : "Serbian"
  sk : "Slovak"
  sl : "Slovenian"
  es : "Spanish"
  sv : "Swedish"
  th : "Thai"
  tr : "Turkish"
  uk : "Ukrainian"
  ur : "Urdu"
  vi : "Vietnamese"

# Tasks
# -----

task "fetch", "fetch humanizer files from repo", ->
  # Site root.
  www = __dirname
  # Temporary directory.
  dir = "/tmp/humanizer-#{Math.floor Math.random()*100000}"
  # Clone Humanizer repo
  exec "git clone #{repo} #{dir}", ->
    process.chdir dir
    # FIX: Looks ugly. Seems like its my own problem.
    exec "npm install coffee-script", ->
      exec "cake build", ->
        locales = []
        # Read locales list.
        for filename in fs.readdirSync "#{dir}/lib/locales"
          code     = filename[10...-3]
          language = codes[code]
          if language?
            locales.push [code, language]
          else
            sys.puts "    ^ Can’t find language name for language code #{code}."

        # Copy locales from fetched repo to site dir.
        copy "#{dir}/lib/locales/*", "#{www}/locales"

        # Copy Humanizer library
        copy "#{dir}/lib/humanizer.js*", "#{www}/javascripts"

        # And finally write locales list to file.
        fs.writeFile "#{www}/locales/index.json", JSON.stringify(locales), (err) ->
          throw err if err

