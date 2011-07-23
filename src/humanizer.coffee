# Establish the root object,
root = this

# Save the previous value of `Humanizer` variable, not *really* likely
# to happen but still.
previousHumanizer = root.Humanizer

if exports?
  Humanizer = exports
else
  Humanizer = root.Humanizer = {}

  # Load locale file on-demand
  Humanizer.locale = (locale, options)->
    path = options.path or options
    # a) grab `<head />` tag
    head = (document.getElementsByTagName "head")[0]

    # b) crete new `<script/>` tag
    script = document.createElement "script"
    script.src = "#{path}/humanizer.#{locale}.js"

    # c) insert it into DOM
    head.appendChild script

# Locale registry, available locales can be found in `locales/`
# directory.
Humanizer.locales = {}


# Runs `Humanizer` in *noConflict* mode, returning the `Humanizer`
# variable to its previous owner. Returns a reference to this Humanizer
# object -- thanks to Backbone.js.
Humanizer.noConflict = ->
  root.Humanizer = previousHumanizer
  @


###
    Localization helper.
###
Humanizer._ = (subject, count)->
  locale = @locales[@currentLocale]

  if not locale?
    throw Error "Locale '#{@currentLocale}' is not available."

  if not count?
    return locale[subject]

  if count is 1
    locale[subject].one
  else
    locale[subject].other.replace "%{count}", count


# Public API
# ----------

###
  Reports the approximate distance in time between two Date objects
  or integers as microseconds. Set includeSeconds to true if you want
  more detailed approximations when distance < 1 min, 29 secs.

  See also: Padrino Documentation on distance_of_time --
  http://www.padrinorb.com/api/classes/Padrino/Helpers/FormatHelpers.html#M000186
###
Humanizer.distanceOfTime = (from, to, includeSeconds)->
  distanceInMinutes = Math.floor(Math.abs(to - from) / 60000)
  distanceInSeconds = Math.floor(Math.abs(to - from) / 1000)

  if 0 <= distanceInMinutes <= 1
    if distanceInMinutes is 0 and includeSeconds isnt on
      @._("lessThanXMinutes", 1)
    else
      if includeSeconds is off
        @._("xMinutes", distanceInMinutes)
      else
        if 0 <= distanceInSeconds <= 4
          @._("lessThanXSeconds", 5)
        else if 5 <= distanceInSeconds <= 9
          @._("lessThanXSeconds", 10)
        else if 10 <= distanceInSeconds <= 19
          @._("lessThanXSeconds", 20)
        else if 20 <= distanceInSeconds <= 39
          @._("halfAMinute")
        else if 40 <= distanceInSeconds <= 59
          @._("lessThanXMinutes", 1)
        else
          @._("xMinutes", 1)

  else if 2 <= distanceInMinutes <= 44
    @._("xMinutes", distanceInMinutes)
  else if 45 <= distanceInMinutes <= 89
    @._("aboutXHours", 1)
  else if 90 <= distanceInMinutes <= 1439
    @._("aboutXHours", Math.floor(distanceInMinutes/60))
  else if 1140 <= distanceInMinutes <= 2529
    @._("xDays", 1)
  else if 2530 <= distanceInMinutes <= 43199
    @._("xDays", Math.floor(distanceInMinutes/1440))
  else if 43200 <= distanceInMinutes <= 86399
    @._("aboutXMonths", 1)
  else if 86400 <= distanceInMinutes <= 525599
    @._("xMonths", Math.floor(distanceInMinutes/43200))
  else
    distanceInYears = Math.floor(distanceInMinutes / 525600)
    minuteOffsetForLeapYear = Math.floor(distanceInYears / 4) * 1440
    remainder = (distanceInMinutes - minuteOffsetForLeapYear) % 525600

    if remainder < 131400
      @._("aboutXYears", distanceInYears)
    else if remainder < 394200
      @._("overXYears", distanceInYears)
    else
      @._("almostXYears", distanceInYears + 1)

###
  Like distanceOfTime, but where `to` is fixed to `new Date()`.
###
Humanizer.timeAgo = (from, includeSeconds)->
  includeSeconds ?= false
  @distanceOfTime from, Date.now(), includeSeconds

# Some nice aliases.
Humanizer.between = Humanizer.distanceOfTime
Humanizer.since = Humanizer.timeAgo
