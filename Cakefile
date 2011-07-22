fs    = require "fs"
sys   = require "sys"
https = require "https"
cs    = require "coffee-script"
path  = require "path"

padrino = "padrino/padrino-framework"

# Helpers
# -------

fetch = (options, callback) ->
  https.get options, (response)->
    chunks = []

    response.setEncoding "utf-8"
    response.on "data", (chunk) -> chunks.push chunk
    response.on "end", -> callback chunks.join ""


exec = (command) ->
  require("child_process").exec command, (err, stdout, stderr) ->
    throw err if err
    console.log stdout + stderr


# Tasks
# -----

task "build", "build everything (library + translations)", ->
  invoke "build:library"
  invoke "build:translations"


task "build:library", "build project from src/*.coffee to lib/*.js", ->
  sys.puts "Building humanize.coffee ..."
  exec "coffee -o lib -c src/*.coffee"


task "build:translations", "build translations from Padrino source", ->
  options =
    host: "github.com"
    path: "/api/v2/json/blob/all/#{padrino}/master"

  fetch options, (response)->
    Object.keys(JSON.parse(response).blobs).forEach (file) ->
      # Skip any non-locale files.
      return if file.indexOf("helpers/locale") is -1

      [rest..., locale] = file.split "/"
      locale = path.basename locale, ".yml"

      # Okay, seems like we have a locale file, time to fetch it.
      options =
        host: "raw.github.com"
        path: "/#{padrino}/master/#{file}"

      fetch options, (yaml)->
        sys.puts "Processing '#{locale}' ..."

        try
          js = cs.compile yaml, bare: true
        catch error
          sys.puts "Failed to parse locale #{locale}:"
          sys.puts "    ^ #{error}"
          return

        # Hardcore compile action!
        # a) extracting `distance_in_words` from compiled Padrino locale.
        localeObj = eval(js)[locale].datetime["distance_in_words"]

        # b) converting locale keys from under_Score to CamelCase.
        toCamelCase = (str) ->
          str.replace /(_\w)/g, (m)-> m.charAt(1).toUpperCase()

        localeObj = Object.keys(localeObj).reduce ((locale, key) ->
          locale[toCamelCase key] = localeObj[key]
          locale
        ), {}

        # c) wrapping resulting `localeObj` in some boilerplate code,
        #    so we can load on demand later.
        localeSource = cs.compile """
          Humanizer = if exports? then exports else @Humanizer ||= {}
          Humanizer.locales ||= {}
          Humanizer.locales.#{locale} = #{JSON.stringify localeObj}
          Humanizer.currentLocale = '#{locale}'
          return Humanizer
        """

        # d) and finally writing the thing to `lib/locale`.
        root     = path.join ".", "lib", "locales"
        filename = path.join root, "humanizer.#{locale}.js"

        path.exists root, (exists) ->
          fs.mkdirSync root, 0755 unless exists
          fs.writeFile filename, localeSource, (err) ->
            throw err if err
