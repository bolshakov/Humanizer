      $(function() {
        // Chosen locales
        var locales;
        var select    = $("#specify-locales select");
        var humanizer = "http://bolshakov.github.com/Humanizer";
        var uglify    = "http://marijnhaverbeke.nl/uglifyjs";

        // Enable js styles
        $("body").attr("id","with-js");

        $("[href=#specify-locales]").modalpop();
        $.getJSON("locales/index.json", function(locales) {
          // Compose languages list
          _(locales)
            .chain()
            // sort by language code, locale: [code, language]
            .sortBy(function(locale){
              return locale[0];
            })
            .each(function(locale) {
              var code     = locale[0];
              var language = locale[1];
              var option = $("<option value=\"" + code + "\">" + language + "</option>");
              select.append(option);
          });

          // fill locales if something chosen
          select.chosen().change(function(event) {
            locales = _(event.target)
              .chain()
              .filter(function(option) {
                return option.selected; })
              .pluck("value")
              .value();
          });

          $("[type=submit]").click(function() {
            var url = uglify + "?code_url=" + humanizer + "/javascripts/humanizer.js";
            _(locales).each(function(code) {
              url = url + "&amp;code_url=" + humanizer + "/locales/humanizer." + code + ".js"
            });
            url += "&download=humanizer.custom.js";
            window.open(url);
          });
        });
      });

