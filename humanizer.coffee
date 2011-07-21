this.Humanizer = (->
  ###
    Helper function. Localizes strings.
  ###
  _t = (subject, count)->
    if typeof Humanizer.locale[Humanizer.currenLocale] is "undefined"
      throw Error("Locale \"#{Humanizer.currenLocale}\" not defined.")

    if typeof count is "undefined"
      return Humanizer.locale[Humanizer.currenLocale][subject]

    if count == 1
      Humanizer.locale[Humanizer.currenLocale][subject]["one"]
    else
      Humanizer.locale[Humanizer.currenLocale][subject]["other"].replace(new RegExp("%\{count\}"), count)

  return {
    ###
      Reports the approximate distance in time between two Date objects or integers as microseconds.
      Set includeSeconds to true if you want more detailed approximations when distance < 1 min, 29 secs.
      See test/ directory for examples.
    ###
    distanceOfTime: (fromTime, toTime, includeSeconds)->
      toTime = toTime.getTime() if toTime instanceof Date
      fromTime = fromTime.getTime() if fromTime instanceof Date

      distanceInMinutes = Math.floor(Math.abs(toTime - fromTime)/60000)
      distanceInSeconds = Math.floor(Math.abs(toTime - fromTime)/1000)

      if 0 <= distanceInMinutes <= 1
        if distanceInMinutes is 0 and includeSeconds isnt on
          _t("lessThanXMinutes", 1)
        else
          if includeSeconds is off
            _t("xMinutes", distanceInMinutes)
          else
            if 0 <= distanceInSeconds <= 4
              _t("lessThanXSeconds", 5)
            else if 5 <= distanceInSeconds <= 9
              _t("lessThanXSeconds", 10)
            else if 10 <= distanceInSeconds <= 19
              _t("lessThanXSeconds", 20)
            else if 20 <= distanceInSeconds <= 39
              _t("halfAMinute")
            else if 40 <= distanceInSeconds <= 59
              _t("lessThanXMinutes", 1)
            else
              _t("xMinutes", 1)

      else if 2 <= distanceInMinutes <= 44
        _t("xMinutes", distanceInMinutes)
      else if 45 <= distanceInMinutes <= 89
        _t("aboutXHours", 1)
      else if 90 <= distanceInMinutes <= 1439
        _t("aboutXHours", Math.floor(distanceInMinutes/60))
      else if 1140 <= distanceInMinutes <= 2529
        _t("xDays", 1)
      else if 2530 <= distanceInMinutes <= 43199
        _t("xDays", Math.floor(distanceInMinutes/1440))
      else if 43200 <= distanceInMinutes <= 86399
        _t("aboutXMonths", 1)
      else if 86400 <= distanceInMinutes <= 525599
        _t("xMonths", Math.floor(distanceInMinutes/43200))
      else
        distanceInYears = Math.floor(distanceInMinutes / 525600)
        minuteOffsetForLeapYear = Math.floor(distanceInYears / 4) * 1440
        remainder = (distanceInMinutes - minuteOffsetForLeapYear) % 525600

        if remainder < 131400
          _t("aboutXYears", distanceInYears)
        else if remainder < 394200
          _t("overXYears", distanceInYears)
        else
          _t("almostXYears", distanceInYears + 1)

    ###
      Like distanceOfTime, but where toTime is fixed to new Date().
    ###
    timeAgo: (fromTime, includeSeconds)->
      includeSeconds ?= false
      @distanceOfTime(fromTime, new Date(), includeSeconds)
  }
)()
# alias for distanceOfTime
this.Humanizer.between = this.Humanizer.distanceOfTime
this.Humanizer.locale = {}

