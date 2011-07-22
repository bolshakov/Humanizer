(function() {
  var Humanizer, previousHumanizer, root;
  root = this;
  previousHumanizer = root.Humanizer;
  if (typeof exports !== "undefined" && exports !== null) {
    Humanizer = exports;
  } else {
    Humanizer = root.Humanizer = {};
  }
  Humanizer.noConflict = function() {
    root.Humanizer = previousHumanizer;
    return this;
  };
  /*
      Localization helper.
  */
  Humanizer._ = function(subject, count) {
    var locale;
    locale = this.locales[this.currentLocale];
    if (!(locale != null)) {
      throw Error("Locale '" + this.currentLocale + "' is not available.");
    }
    if (!(count != null)) {
      return locale[subject];
    }
    if (count === 1) {
      return locale[subject].one;
    } else {
      return locale[subject].other.replace(new RegExp("%\{count\}"), count);
    }
  };
  /*
    Reports the approximate distance in time between two Date objects
    or integers as microseconds. Set includeSeconds to true if you want
    more detailed approximations when distance < 1 min, 29 secs. See
    `test/` directory for examples.
  */
  Humanizer.distanceOfTime = function(fromTime, toTime, includeSeconds) {
    var distanceInMinutes, distanceInSeconds, distanceInYears, minuteOffsetForLeapYear, remainder;
    if (toTime instanceof Date) {
      toTime = toTime.getTime();
    }
    if (fromTime instanceof Date) {
      fromTime = fromTime.getTime();
    }
    distanceInMinutes = Math.floor(Math.abs(toTime - fromTime) / 60000);
    distanceInSeconds = Math.floor(Math.abs(toTime - fromTime) / 1000);
    if ((0 <= distanceInMinutes && distanceInMinutes <= 1)) {
      if (distanceInMinutes === 0 && includeSeconds !== true) {
        return this._("lessThanXMinutes", 1);
      } else {
        if (includeSeconds === false) {
          return this._("xMinutes", distanceInMinutes);
        } else {
          if ((0 <= distanceInSeconds && distanceInSeconds <= 4)) {
            return this._("lessThanXSeconds", 5);
          } else if ((5 <= distanceInSeconds && distanceInSeconds <= 9)) {
            return this._("lessThanXSeconds", 10);
          } else if ((10 <= distanceInSeconds && distanceInSeconds <= 19)) {
            return this._("lessThanXSeconds", 20);
          } else if ((20 <= distanceInSeconds && distanceInSeconds <= 39)) {
            return this._("halfAMinute");
          } else if ((40 <= distanceInSeconds && distanceInSeconds <= 59)) {
            return this._("lessThanXMinutes", 1);
          } else {
            return this._("xMinutes", 1);
          }
        }
      }
    } else if ((2 <= distanceInMinutes && distanceInMinutes <= 44)) {
      return this._("xMinutes", distanceInMinutes);
    } else if ((45 <= distanceInMinutes && distanceInMinutes <= 89)) {
      return this._("aboutXHours", 1);
    } else if ((90 <= distanceInMinutes && distanceInMinutes <= 1439)) {
      return this._("aboutXHours", Math.floor(distanceInMinutes / 60));
    } else if ((1140 <= distanceInMinutes && distanceInMinutes <= 2529)) {
      return this._("xDays", 1);
    } else if ((2530 <= distanceInMinutes && distanceInMinutes <= 43199)) {
      return this._("xDays", Math.floor(distanceInMinutes / 1440));
    } else if ((43200 <= distanceInMinutes && distanceInMinutes <= 86399)) {
      return this._("aboutXMonths", 1);
    } else if ((86400 <= distanceInMinutes && distanceInMinutes <= 525599)) {
      return this._("xMonths", Math.floor(distanceInMinutes / 43200));
    } else {
      distanceInYears = Math.floor(distanceInMinutes / 525600);
      minuteOffsetForLeapYear = Math.floor(distanceInYears / 4) * 1440;
      remainder = (distanceInMinutes - minuteOffsetForLeapYear) % 525600;
      if (remainder < 131400) {
        return this._("aboutXYears", distanceInYears);
      } else if (remainder < 394200) {
        return this._("overXYears", distanceInYears);
      } else {
        return this._("almostXYears", distanceInYears + 1);
      }
    }
  };
  /*
    Like distanceOfTime, but where toTime is fixed to `new Date()`.
  */
  Humanizer.timeAgo = function(fromTime, includeSeconds) {
        if (includeSeconds != null) {
      includeSeconds;
    } else {
      includeSeconds = false;
    };
    return this.distanceOfTime(fromTime, new Date(), includeSeconds);
  };
  Humanizer.between = Humanizer.distanceOfTime;
  Humanizer.locales = {};
}).call(this);
