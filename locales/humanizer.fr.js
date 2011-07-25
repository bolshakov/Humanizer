(function() {
  var Humanizer;
  Humanizer = typeof exports !== "undefined" && exports !== null ? exports : this.Humanizer || (this.Humanizer = {});
  Humanizer.locales || (Humanizer.locales = {});
  Humanizer.locales.fr = {
    "halfAMinute": "une demi minute",
    "lessThanXSeconds": {
      "one": "infèrieur à une seconde",
      "other": "infèrieur à %{count} secondes"
    },
    "xSeconds": {
      "one": "1 seconde",
      "other": "%{count} secondes"
    },
    "lessThanXMinutes": {
      "one": "infèrieur à 1 minute",
      "other": "infèrieur à %{count} minutes"
    },
    "xMinutes": {
      "one": "1 minute",
      "other": "%{count} minutes"
    },
    "aboutXHours": {
      "one": "environ 1 heure",
      "other": "environ %{count} heures"
    },
    "xDays": {
      "one": "1 jour",
      "other": "%{count} jours"
    },
    "aboutXMonths": {
      "one": "environ 1 mois",
      "other": "environ %{count} mois"
    },
    "xMonths": {
      "one": "1 mois",
      "other": "%{count} mois"
    },
    "aboutXYears": {
      "one": "environ 1 ans",
      "other": "environ %{count} ans"
    },
    "overXYears": {
      "one": "plus d'un an",
      "other": "plus de %{count} ans"
    },
    "almostXYears": {
      "one": "près d'un ans",
      "other": "près de %{count} years"
    }
  };
  Humanizer.currentLocale = 'fr';
  return Humanizer;
}).call(this);