(function() {
  var root = this;

  if (typeof exports !== "undefined" && exports !== null) {
      Humanizer = exports;
  } else {
      Humanizer = root.Humanizer = {};
  }

  Humanizer.locales = Humanizer.locales || {};
  Humanizer.locales.da = {"halfAMinute":"et halvt minut","lessThanXSeconds":{"one":"mindre end et sekund","other":"mindre end %{count} sekunder"},"xSeconds":{"one":"et sekund","other":"%{count} sekunder"},"lessThanXMinutes":{"one":"mindre end et minut","other":"mindre end %{count} minutter"},"xMinutes":{"one":"et minut","other":"%{count} minutter"},"aboutXHours":{"one":"cirka en time","other":"cirka %{count} timer"},"xDays":{"one":"en dag","other":"%{count} dage"},"aboutXMonths":{"one":"cirka en måned","other":"cirka %{count} måneder"},"xMonths":{"one":"en måned","other":"%{count} måneder"},"aboutXYears":{"one":"cirka et år","other":"cirka %{count} år"},"overXYears":{"one":"mere end et år","other":"mere end %{count} år"},"almostXYears":{"one":"næsten et år","other":"næsten %{count} years"}}
  Humanizer.currentLocale = "da";
})()