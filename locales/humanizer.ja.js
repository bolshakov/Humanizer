(function() {
  var Humanizer;
  Humanizer = typeof exports !== "undefined" && exports !== null ? exports : this.Humanizer || (this.Humanizer = {});
  Humanizer.locales || (Humanizer.locales = {});
  Humanizer.locales.ja = {
    "halfAMinute": "30秒",
    "lessThanXSeconds": {
      "one": "1 秒以内",
      "other": "%{count} 秒以内"
    },
    "xSeconds": {
      "one": "1 秒",
      "other": "%{count} 秒"
    },
    "lessThanXMinutes": {
      "one": "1 分以内",
      "other": "%{count} 分以内"
    },
    "xMinutes": {
      "one": "1 分",
      "other": "%{count} 分"
    },
    "aboutXHours": {
      "one": "およそ 1 時間",
      "other": "およそ %{count} 時間"
    },
    "xDays": {
      "one": "1 日",
      "other": "%{count} 日"
    },
    "aboutXMonths": {
      "one": "およそ 1 ヶ月",
      "other": "およそ %{count} ヶ月"
    },
    "xMonths": {
      "one": "1 ヶ月",
      "other": "%{count} ヶ月"
    },
    "aboutXYears": {
      "one": "およそ 1 年",
      "other": "およそ %{count} 年"
    },
    "overXYears": {
      "one": "1 年以上",
      "other": "%{count} 年以上"
    },
    "almostXYears": {
      "one": "ほぼ 1 年",
      "other": "ほぼ %{count} 年"
    }
  };
  Humanizer.currentLocale = 'ja';
  return Humanizer;
}).call(this);
