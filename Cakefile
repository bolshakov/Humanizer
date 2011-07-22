fs = require "fs"
sys = require "sys"
https = require "https"
cs = require "coffee-script"
path = require "path"

padrinoRepoPath = "padrino/padrino-framework"
compileDir = "lib"

option "-o", "--output [DIR]", "directory for compiled code"

task "compile", "compile humanizer library", (options)->
  compilePath = options.output or compileDir
  source = fs.readFileSync "humanizer.coffee", "utf-8"
  js = cs.compile source
  sys.puts "Compiling humanizer.coffee..."
  fs.writeFile path.join(".", compilePath, "humanizer.js"), js, (error)->
    if error
      sys.puts "Fail to save file humanizer.js."
      sys.puts error


task "fetch", "fetch translations from Padrino source", (options)->
  compilePath = options.output or compileDir
  options =
    host: "github.com"
    path: "/api/v2/json/blob/all/#{padrinoRepoPath}/master"

  # Fetch locales list
  https.get options, (response)->
    response.setEncoding('utf8')
    body = ""
    response.on "data", (chunk)-> body += chunk
    response.on "end", ->
      # Hash of all repo files
      files = JSON.parse(body).blobs
      # Filter locale files
      for file, hash of files
        if file.indexOf("helpers/locale") isnt -1
          options =
            host: "raw.github.com"
            path: "/#{padrinoRepoPath}/master/#{file}"
          # Fetch locale files
          https.get options, (response)->
            webPath = response.socket.pair.cleartext._httpMessage.path
            localeName = webPath[webPath.indexOf("helpers/locale") + 15...-4]
            sys.puts "Fetching \"#{localeName}\" locale..."
            yaml = ""
            response.on "data", (chunk)-> yaml += chunk
            response.on "end", ->
              try
                jsString = cs.compile yaml, {bare: true}
                # Locale from padrino source
                rawLocale = (eval(jsString))[localeName]["datetime"]["distance_in_words"]
                # Camalize keys
                localeSource = Object.keys(rawLocale).reduce ((locale, key) ->
                  camalizedKey = key.replace /(_\w)/g, (m)-> m.charAt(1).toUpperCase()
                  locale[camalizedKey] = rawLocale[key]
                  locale
                ), {}
                localeSource = """(function() {
                  var root = this;
                  root.Humanizer.locale.#{localeName} =
                  #{JSON.stringify(localeSource)}
                  root.Humanizer.currenLocale = "#{localeName}"
                })()"""
                filename = "humanizer.locale.#{localeName}.js"
                fs.writeFile path.join(".", compilePath, "locale", filename), localeSource, (error)->
                  # Skip amd try to fetch other locales
                  if error
                    sys.puts "Fail to save locale #{localeName}."
                    sys.puts error
              catch error
                sys.puts "Faild to parse locale #{localeName}"
                sys.puts "    ^ #{error}"

