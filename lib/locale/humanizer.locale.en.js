(function() {
  var root = this;

  if (typeof exports !== "undefined" && exports !== null) {
      Humanizer = exports;
  } else {
      Humanizer = root.Humanizer = {};
  }

  Humanizer.locales = Humanizer.locales || {};
  Humanizer.locales.en = {"halfAMinute":"half a minute","lessThanXSeconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"xSeconds":{"one":"1 second","other":"%{count} seconds"},"lessThanXMinutes":{"one":"less than a minute","other":"less than %{count} minutes"},"xMinutes":{"one":"1 minute","other":"%{count} minutes"},"aboutXHours":{"one":"about 1 hour","other":"about %{count} hours"},"xDays":{"one":"1 day","other":"%{count} days"},"aboutXMonths":{"one":"about 1 month","other":"about %{count} months"},"xMonths":{"one":"1 month","other":"%{count} months"},"aboutXYears":{"one":"about 1 year","other":"about %{count} years"},"overXYears":{"one":"over 1 year","other":"over %{count} years"},"almostXYears":{"one":"almost 1 year","other":"almost %{count} years"}}
  Humanizer.currentLocale = "en";
})()