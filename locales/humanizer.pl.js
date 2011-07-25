(function() {
  var Humanizer;
  Humanizer = typeof exports !== "undefined" && exports !== null ? exports : this.Humanizer || (this.Humanizer = {});
  Humanizer.locales || (Humanizer.locales = {});
  Humanizer.locales.pl = {
    "halfAMinute": "pół minuty",
    "lessThanXSeconds": {
      "one": "mniej niż sekundę",
      "few": "mniej niż %{count} sekundy",
      "other": "mniej niż %{count} sekund"
    },
    "xSeconds": {
      "one": "sekundę",
      "few": "%{count} sekundy",
      "other": "%{count} sekund"
    },
    "lessThanXMinutes": {
      "one": "mniej niż minutę",
      "few": "mniej niż %{count} minuty",
      "other": "mniej niż %{count} minut"
    },
    "xMinutes": {
      "one": "minutę",
      "few": "%{count} minuty",
      "other": "%{count} minut"
    },
    "aboutXHours": {
      "one": "około godziny",
      "other": "około %{count} godzin"
    },
    "xDays": {
      "one": "1 dzień",
      "other": "%{count} dni"
    },
    "aboutXMonths": {
      "one": "około miesiąca",
      "other": "około %{count} miesięcy"
    },
    "xMonths": {
      "one": "1 miesiąc",
      "few": "%{count} miesiące",
      "other": "%{count} miesięcy"
    },
    "aboutXYears": {
      "one": "około roku",
      "other": "około %{count} lat"
    },
    "almostXYears": {
      "one": "prawie rok",
      "few": "prawie %{count} lata",
      "other": "prawie %{count} lat"
    },
    "overXYears": {
      "one": "ponad rok",
      "few": "ponad %{count} lata",
      "other": "ponad %{count} lat"
    }
  };
  Humanizer.currentLocale = 'pl';
  return Humanizer;
}).call(this);