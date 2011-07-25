(function() {
  var Humanizer;
  Humanizer = typeof exports !== "undefined" && exports !== null ? exports : this.Humanizer || (this.Humanizer = {});
  Humanizer.locales || (Humanizer.locales = {});
  Humanizer.locales.ru = {
    "halfAMinute": "пол минуты",
    "lessThanXSeconds": {
      "one": "менее секунды",
      "other": "менее %{count} секунд"
    },
    "xSeconds": {
      "one": "1 секунда",
      "other": "%{count} секунд"
    },
    "lessThanXMinutes": {
      "one": "менее минуты",
      "other": "менее %{count} минут"
    },
    "xMinutes": {
      "one": "1 минута",
      "other": "%{count} минут"
    },
    "aboutXHours": {
      "one": "около часа",
      "other": "около %{count} часов"
    },
    "xDays": {
      "one": "1 день",
      "other": "%{count} дней"
    },
    "aboutXMonths": {
      "one": "около месяца",
      "other": "около %{count} месяцев"
    },
    "xMonths": {
      "one": "1 месяц",
      "other": "%{count} месяцев"
    },
    "aboutXYears": {
      "one": "около года",
      "other": "около %{count} лет"
    },
    "overXYears": {
      "one": "более года",
      "other": "более %{count} лет"
    },
    "almostXYears": {
      "one": "почти год",
      "other": "почти %{count} года"
    }
  };
  Humanizer.currentLocale = 'ru';
  return Humanizer;
}).call(this);
