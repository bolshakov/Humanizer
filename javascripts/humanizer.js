(function() {
  var Humanizer, currentLocale, previousHumanizer, root, _;
  root = this;
  currentLocale = "";
  previousHumanizer = root.Humanizer;
  if (typeof exports !== "undefined" && exports !== null) {
    Humanizer = exports;
    Humanizer.locale = function() {
      var file, key, locale, value, _ref;
      locale = arguments[0];
      if (locale == null) {
        return currentLocale;
      }
      if (!this.locales[locale]) {
        file = "" + __dirname + "/locales/humanizer." + locale + ".js";
        if (require("fs").statSync(file).isFile()) {
          _ref = require(file);
          for (key in _ref) {
            value = _ref[key];
            this[key] = value;
          }
        } else {
          throw Error("Locale '" + locale + "' is not available.");
        }
      }
      currentLocale = locale;
      return this;
    };
  } else {
    Humanizer = root.Humanizer = {};
    Humanizer.locale = function() {
      var locale;
      locale = arguments[0];
      if (locale == null) {
        return currentLocale;
      }
      if (!this.locales[locale]) {
        throw Error("Locale '" + locale + "' is not available.");
      }
      currentLocale = locale;
      return this;
    };
  }
  Humanizer.locales = {};
  Humanizer.noConflict = function() {
    root.Humanizer = previousHumanizer;
    return this;
  };
  /*
      Localization helper.
  */
  _ = function(subject, count) {
    var locale;
    if (Humanizer.locales === {}) {
      throw Error("Locales not loaded. To use Humanizer you need\nto load at least one locale. See README for details.");
    }
    locale = Humanizer.locales[currentLocale];
    if (!(count != null)) {
      return locale[subject];
    }
    if (count === 1) {
      return locale[subject].one;
    } else {
      return locale[subject].other.replace("%{count}", count);
    }
  };
  /*
    Reports the approximate distance in time between two Date objects
    or integers as microseconds. Set includeSeconds to true if you want
    more detailed approximations when distance < 1 min, 29 secs.
  
    See also: Padrino Documentation on distance_of_time --
    http://www.padrinorb.com/api/classes/Padrino/Helpers/FormatHelpers.html#M000186
  */
  Humanizer.distanceOfTime = function(from, to, includeSeconds) {
    var distanceInMinutes, distanceInSeconds, distanceInYears, minuteOffsetForLeapYear, remainder;
    distanceInMinutes = Math.floor(Math.abs(to - from) / 60000);
    distanceInSeconds = Math.floor(Math.abs(to - from) / 1000);
    if ((0 <= distanceInMinutes && distanceInMinutes <= 1)) {
      if (distanceInMinutes === 0 && includeSeconds !== true) {
        return _("lessThanXMinutes", 1);
      } else {
        if (includeSeconds === false) {
          return _("xMinutes", distanceInMinutes);
        } else {
          if ((0 <= distanceInSeconds && distanceInSeconds <= 4)) {
            return _("lessThanXSeconds", 5);
          } else if ((5 <= distanceInSeconds && distanceInSeconds <= 9)) {
            return _("lessThanXSeconds", 10);
          } else if ((10 <= distanceInSeconds && distanceInSeconds <= 19)) {
            return _("lessThanXSeconds", 20);
          } else if ((20 <= distanceInSeconds && distanceInSeconds <= 39)) {
            return _("halfAMinute");
          } else if ((40 <= distanceInSeconds && distanceInSeconds <= 59)) {
            return _("lessThanXMinutes", 1);
          } else {
            return _("xMinutes", 1);
          }
        }
      }
    } else if ((2 <= distanceInMinutes && distanceInMinutes <= 44)) {
      return _("xMinutes", distanceInMinutes);
    } else if ((45 <= distanceInMinutes && distanceInMinutes <= 89)) {
      return _("aboutXHours", 1);
    } else if ((90 <= distanceInMinutes && distanceInMinutes <= 1439)) {
      return _("aboutXHours", Math.floor(distanceInMinutes / 60));
    } else if ((1140 <= distanceInMinutes && distanceInMinutes <= 2529)) {
      return _("xDays", 1);
    } else if ((2530 <= distanceInMinutes && distanceInMinutes <= 43199)) {
      return _("xDays", Math.floor(distanceInMinutes / 1440));
    } else if ((43200 <= distanceInMinutes && distanceInMinutes <= 86399)) {
      return _("aboutXMonths", 1);
    } else if ((86400 <= distanceInMinutes && distanceInMinutes <= 525599)) {
      return _("xMonths", Math.floor(distanceInMinutes / 43200));
    } else {
      distanceInYears = Math.floor(distanceInMinutes / 525600);
      minuteOffsetForLeapYear = Math.floor(distanceInYears / 4) * 1440;
      remainder = (distanceInMinutes - minuteOffsetForLeapYear) % 525600;
      if (remainder < 131400) {
        return _("aboutXYears", distanceInYears);
      } else if (remainder < 394200) {
        return _("overXYears", distanceInYears);
      } else {
        return _("almostXYears", distanceInYears + 1);
      }
    }
  };
  /*
    Like distanceOfTime, but where `to` is fixed to `new Date()`.
  */
  Humanizer.timeAgo = function(from, includeSeconds) {
        if (includeSeconds != null) {
      includeSeconds;
    } else {
      includeSeconds = false;
    };
    return this.distanceOfTime(from, Date.now(), includeSeconds);
  };
  Humanizer.between = Humanizer.distanceOfTime;
  Humanizer.since = Humanizer.timeAgo;
}).call(this);
