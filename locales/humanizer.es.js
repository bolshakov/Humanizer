(function() {
  var Humanizer;
  Humanizer = typeof exports !== "undefined" && exports !== null ? exports : this.Humanizer || (this.Humanizer = {});
  Humanizer.locales || (Humanizer.locales = {});
  Humanizer.locales.es = {
    "halfAMinute": "medio minuto",
    "lessThanXSeconds": {
      "one": "menos de un segundo",
      "other": "menos de %{count} segundos"
    },
    "xSeconds": {
      "one": "1 segundo",
      "other": "%{count} segundos"
    },
    "lessThanXMinutes": {
      "one": "menos de un minuto",
      "other": "menos de %{count} minutos"
    },
    "xMinutes": {
      "one": "1 minuto",
      "other": "%{count} minutos"
    },
    "aboutXHours": {
      "one": "hace 1 hora",
      "other": "hace %{count} horas"
    },
    "xDays": {
      "one": "1 día",
      "other": "%{count} días"
    },
    "aboutXMonths": {
      "one": "hace 1 mes",
      "other": "hace %{count} meses"
    },
    "xMonths": {
      "one": "1 mes",
      "other": "%{count} meses"
    },
    "aboutXYears": {
      "one": "hace 1 año",
      "other": "hace %{count} años"
    },
    "overXYears": {
      "one": "hace más de 1 año",
      "other": "hace más de %{count} años"
    },
    "almostXYears": {
      "one": "casi 1 año",
      "other": "casi %{count} años"
    }
  };
  Humanizer.currentLocale = 'es';
  return Humanizer;
}).call(this);
