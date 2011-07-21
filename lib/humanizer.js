(function() {
  window.Humanizer = (function() {
    /*
        Helper function. Localizes strings.
      */    var _t;
    _t = function(subject, count) {
      if (Humanizer.locale[Humanizer.currenLocale] === void 0) {
        throw Error("Locale \"" + Humanizer.currenLocale + "\" not defined.");
      }
      if (count === void 0) {
        return Humanizer.locale[Humanizer.currenLocale][subject];
      }
      if (count === 1) {
        return Humanizer.locale[Humanizer.currenLocale][subject]["one"];
      } else {
        return Humanizer.locale[Humanizer.currenLocale][subject]["other"].replace(new RegExp("%\{count\}"), count);
      }
    };
    return {
      /*
            Reports the approximate distance in time between two Date objects or integers as microseconds.
            Set includeSeconds to true if you want more detailed approximations when distance < 1 min, 29 secs.
            See test/ directory for examples.
          */
      distanceOfTime: function(fromTime, toTime, includeSeconds) {
        var distanceInMinutes, distanceInSeconds, distanceInYears, minuteOffsetForLeapYear, remainder;
        if (toTime.constructor === Date) {
          toTime = toTime.getTime();
        }
        if (fromTime.constructor === Date) {
          fromTime = fromTime.getTime();
        }
        distanceInMinutes = Math.floor(Math.abs(toTime - fromTime) / 60000);
        distanceInSeconds = Math.floor(Math.abs(toTime - fromTime) / 1000);
        if ((0 <= distanceInMinutes && distanceInMinutes <= 1)) {
          if (distanceInMinutes === 0 && includeSeconds !== true) {
            return _t("lessThanXMinutes", 1);
          } else {
            if (includeSeconds === false) {
              return _t("xMinutes", distanceInMinutes);
            } else {
              if ((0 <= distanceInSeconds && distanceInSeconds <= 4)) {
                return _t("lessThanXSeconds", 5);
              } else if ((5 <= distanceInSeconds && distanceInSeconds <= 9)) {
                return _t("lessThanXSeconds", 10);
              } else if ((10 <= distanceInSeconds && distanceInSeconds <= 19)) {
                return _t("lessThanXSeconds", 20);
              } else if ((20 <= distanceInSeconds && distanceInSeconds <= 39)) {
                return _t("halfAMinute");
              } else if ((40 <= distanceInSeconds && distanceInSeconds <= 59)) {
                return _t("lessThanXMinutes", 1);
              } else {
                return _t("xMinutes", 1);
              }
            }
          }
        } else if ((2 <= distanceInMinutes && distanceInMinutes <= 44)) {
          return _t("xMinutes", distanceInMinutes);
        } else if ((45 <= distanceInMinutes && distanceInMinutes <= 89)) {
          return _t("aboutXHours", 1);
        } else if ((90 <= distanceInMinutes && distanceInMinutes <= 1439)) {
          return _t("aboutXHours", Math.floor(distanceInMinutes / 60));
        } else if ((1140 <= distanceInMinutes && distanceInMinutes <= 2529)) {
          return _t("xDays", 1);
        } else if ((2530 <= distanceInMinutes && distanceInMinutes <= 43199)) {
          return _t("xDays", Math.floor(distanceInMinutes / 1440));
        } else if ((43200 <= distanceInMinutes && distanceInMinutes <= 86399)) {
          return _t("aboutXMonths", 1);
        } else if ((86400 <= distanceInMinutes && distanceInMinutes <= 525599)) {
          return _t("xMonths", Math.floor(distanceInMinutes / 43200));
        } else {
          distanceInYears = Math.floor(distanceInMinutes / 525600);
          minuteOffsetForLeapYear = Math.floor(distanceInYears / 4) * 1440;
          remainder = (distanceInMinutes - minuteOffsetForLeapYear) % 525600;
          if (remainder < 131400) {
            return _t("aboutXYears", distanceInYears);
          } else if (remainder < 394200) {
            return _t("overXYears", distanceInYears);
          } else {
            return _t("almostXYears", distanceInYears + 1);
          }
        }
      },
      /*
            Like distanceOfTime, but where toTime is fixed to new Date().
          */
      timeAgo: function(fromTime, includeSeconds) {
                if (includeSeconds != null) {
          includeSeconds;
        } else {
          includeSeconds = false;
        };
        return this.distanceOfTime(fromTime, new Date(), includeSeconds);
      }
    };
  })();
  window.Humanizer.locale = {};
}).call(this);
