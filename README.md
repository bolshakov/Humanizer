Humanizer
=========

`Humanizer` is a library, which knows how to measure approximate distance
between the to given dates. For example, the difference between *now* and
*now - 25 seconds ago* is `less than a minute` -- obvious, right?


Examples
--------

First, we'll need a bunch of helpers -- `m()` for minutes and `s()`
for seconds:

```coffeescript
s = (sec) -> sec * 1000
m = (min) -> min * s(60)
```

### Humanizer.between(from, to, includeSeconds)

Returns the approximate distance in time between two given objects,
which can either be `Date` or `Number` instances. When `includeSeconds`
is `true`, `Humanizer` calculates a more precise approximation, for
intervals under one and a half minutes.

```coffeescript
coffee> from = new Date()
Sat, 23 Jul 2011 00:52:59 GMT
coffee> Humanizer.between(from, from - m(65))
"about 1 hour"
coffee> Humanizer.between(from, from + s(15), true)
"less than 20 seconds"
```

### Humanizer.since(from, to, includeSeconds)

Just like `#between()`, but the second argument is fixed to `new Date()`.

```coffeescript
coffee> Humanizer.since(new Date() + m(3))
"3 minutes"
coffee> Humanizer.since(new Date())
"less than a minute"
```

Usage
-----

Add `humanize.js` to your `<head />` and don't forget to include the
locales you need:

    <head>
      <script src="lib/humanizer.js"></script>
      <script>
        var bicycleDay = Date.parse("November 16, 1938");
        window.onload = function() {
          Humanizer.locale("en", {path: "lib/locales"}).addEventListener("load", function() {
            Humanizer.since(bicycleDay);
          }, false);
        }
      </script>
    </head>

Note: before using the library you need to ensure that a locale has been loaded.

Building the library
--------------------

Easy as pie! erm `cake`:

    $ cake build

This will compile `humanizer.coffee` and also fetch all available locales
from Padrino, translating them into a format `Humanizer` can understand.


Copyright
---------

Source code was extracted from Padrino project and translated into
CoffeeScript. See LICENSE file for details.

