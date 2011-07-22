(function() {
  var root = this;

  if (typeof exports !== "undefined" && exports !== null) {
      Humanizer = exports;
  } else {
      Humanizer = root.Humanizer = {};
  }

  Humanizer.locales = Humanizer.locales || {};
  Humanizer.locales.tr = {"halfAMinute":"30 saniye","lessThanXSeconds":{"one":"1 saniyeden az","other":"%{count} saniyeden az"},"xSeconds":{"one":"1 saniye","other":"%{count} saniye"},"lessThanXMinutes":{"one":"bir dakikadan az","other":"%{count} dakikadan az"},"xMinutes":{"one":"1 dakika","other":"%{count} dakika"},"aboutXHours":{"one":"yaklaşık 1 saat","other":"yaklaşık %{count} saat"},"xDays":{"one":"1 gün","other":"%{count} gün"},"aboutXMonths":{"one":"yaklaşık 1 ay","other":"yaklaşık %{count} ay"},"xMonths":{"one":"1 ay","other":"%{count} ay"},"aboutXYears":{"one":"yaklaşık 1 yıl","other":"yaklaşık %{count} yıl"},"overXYears":{"one":"1 yıldan fazla","other":"%{count} yıldan fazla"},"almostXYears":{"one":"neredeyse 1 yıl","other":"neredeyse %{count} yıl"}}
  Humanizer.currentLocale = "tr";
})()