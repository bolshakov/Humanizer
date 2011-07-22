(function() {
  var root = this;

  if (typeof exports !== "undefined" && exports !== null) {
      Humanizer = exports;
  } else {
      Humanizer = root.Humanizer = {};
  }

  Humanizer.locales = Humanizer.locales || {};
  Humanizer.locales.pt_br = {"halfAMinute":"meio minuto","lessThanXSeconds":{"one":"menos de 1 segundo","other":"menos de %{count} segundos"},"xSeconds":{"one":"1 segundo","other":"%{count} segundos"},"lessThanXMinutes":{"one":"menos de 1 minuto","other":"menos de %{count} minutos"},"xMinutes":{"one":"1 minuto","other":"%{count} minutos"},"aboutXHours":{"one":"cerca de 1 hora","other":"cerca de %{count} horas"},"xDays":{"one":"1 dia","other":"%{count} dias"},"aboutXMonths":{"one":"cerca de 1 mês","other":"cerca de %{count} meses"},"xMonths":{"one":"1 mês","other":"%{count} meses"},"aboutXYears":{"one":"cerca de 1 ano","other":"cerca de %{count} anos"},"overXYears":{"one":"mais de 1 ano","other":"mais de %{count} anos"},"almostXYears":{"one":"quase 1 ano","other":"quase %{count} anos"}}
  Humanizer.currentLocale = "pt_br";
})()