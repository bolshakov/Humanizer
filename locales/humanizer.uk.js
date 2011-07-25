(function() {
  var Humanizer;
  Humanizer = typeof exports !== "undefined" && exports !== null ? exports : this.Humanizer || (this.Humanizer = {});
  Humanizer.locales || (Humanizer.locales = {});
  Humanizer.locales.uk = {
    "halfAMinute": "півхвилини",
    "lessThanXSeconds": {
      "one": "менше секунди",
      "other": "менше %{count} секунд"
    },
    "xSeconds": {
      "one": "1 секунда",
      "other": "%{count} секунд"
    },
    "lessThanXMinutes": {
      "one": "менше хвилини",
      "other": "менше %{count} хвилин"
    },
    "xMinutes": {
      "one": "1 хвилина",
      "other": "%{count} хвилин"
    },
    "aboutXHours": {
      "one": "близько години",
      "other": "близько %{count} годин"
    },
    "xDays": {
      "one": "1 день",
      "other": "%{count} днів"
    },
    "aboutXMonths": {
      "one": "близько місяця",
      "other": "близько %{count} місяців"
    },
    "xMonths": {
      "one": "1 місяць",
      "other": "%{count} месяців"
    },
    "aboutXYears": {
      "one": "близько року",
      "other": "близько %{count} років"
    },
    "overXYears": {
      "one": "більше року",
      "other": "більше %{count} років"
    },
    "almostXYears": {
      "one": "майже рік",
      "other": "майжу %{count} роки"
    }
  };
  Humanizer.currentLocale = 'uk';
  return Humanizer;
}).call(this);
