(function() {
  var Humanizer;
  Humanizer = typeof exports !== "undefined" && exports !== null ? exports : this.Humanizer || (this.Humanizer = {});
  Humanizer.locales || (Humanizer.locales = {});
  Humanizer.locales.no = {
    "halfAMinute": "et halvt minutt",
    "lessThanXSeconds": {
      "one": "mindre enn et sekund",
      "other": "mindre enn %{count} sekunder"
    },
    "xSeconds": {
      "one": "ett sekund",
      "other": "%{count} sekunder"
    },
    "lessThanXMinutes": {
      "one": "mindre enn et minutt",
      "other": "mindre enn %{count} minutter"
    },
    "xMinutes": {
      "one": "ett minutt",
      "other": "%{count} minutter"
    },
    "aboutXHours": {
      "one": "cirka en time",
      "other": "cirka %{count} timer"
    },
    "xDays": {
      "one": "en dag",
      "other": "%{count} dager"
    },
    "aboutXMonths": {
      "one": "cirka en måned",
      "other": "cirka %{count} måneder"
    },
    "xMonths": {
      "one": "en måned",
      "other": "%{count} måneder"
    },
    "aboutXYears": {
      "one": "cirka et år",
      "other": "cirka %{count} år"
    },
    "overXYears": {
      "one": "mer enn ett år",
      "other": "mer enn %{count} år"
    },
    "almostXYears": {
      "one": "nesten et år",
      "other": "nesten %{count} år"
    }
  };
  Humanizer.currentLocale = 'no';
  return Humanizer;
}).call(this);