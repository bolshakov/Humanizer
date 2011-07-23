Humanizer
=========

`Humanizer` is a library, which knows how to measure approximate distance
between the to given dates. For example, the difference between `now` and
`now - 25 seconds ago` is `less than a minute` -- obvious, right?

Actually, there's no magic, here's a list of intervals with the
corresponding outputs:

<table>
  <tr>
    <td>0 <-> 29 secs</td><td>less than a minute</td>
  </tr>
  <tr>
    <td>30 secs <-> 1 min, 29 secs</td><td>1 minute</td>
  </tr>
  <tr>
    <td>1 min, 30 secs <-> 44 mins, 29 secs</td><td>[2..44] minutes</td>
  </tr>
  <tr>
    <td>44 mins, 30 secs <-> 89 mins, 29 secs</td><td>about 1 hour</td>
  </tr>
  <tr>
    <td>89 mins, 29 secs <-> 23 hrs, 59 mins, 29 secs</td><td>about [2..24] hours</td>
  </tr>
  <tr>
    <td>23 hrs, 59 mins, 29 secs <-> 47 hrs, 59 mins, 29 secs</td><td>1 day</td>
  </tr>
  <tr>
    <td>47 hrs, 59 mins, 29 secs <-> 29 days, 23 hrs, 59 mins, 29 secs</td><td>[2..29] days</td>
  </tr>
  <tr>
    <td>29 days, 23 hrs, 59 mins, 30 secs <-> 59 days, 23 hrs, 59 mins, 29 secs</td><td>about 1 month</td>
  </tr>
  <tr>
    <td>59 days, 23 hrs, 59 mins, 30 secs <-> 1 yr minus 1 sec</td><td>[2..12] months</td>
  </tr>
  <tr>
    <td>1 yr <-> 1 yr, 3 months</td><td>about 1 year</td>
  </tr>
  <tr>
    <td>1 yr, 3 months <-> 1 yr, 9 months</td><td>over 1 year</td>
  </tr>
  <tr>
    <td>1 yr, 9 months <-> 2 yr minus 1 sec</td><td>almost 2 years</td>
  </tr>
  <tr>
    <td>2 yrs <-> max time or date</td><td>(same rules as 1 yr)</td>
  </tr>
</table>

There's also a special *more precise* table for intervals under one
and a half minutes:

<table>
  <tr>
    <td>0-4 secs</td><td>less than 5 seconds</td>
  </tr>
  <tr>
    <td>5-9 secs</td><td>less than 10 seconds</td>
  </tr>
  <tr>
    <td>10-19 secs</td><td>less than 20 seconds</td>
  </tr>
  <tr>
    <td>20-39 secs</td><td>half a minute</td>
  </tr>
  <tr>
    <td>40-59 secs</td><td>less than a minute</td>
  </tr>
  <tr>
    <td>60-89 secs</td><td>1 minute</td>
  </tr>
</table>


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

    <script src="javascripts/humanizer.js"></script>
    <script src="javascripts/locale/humanizer.locale.en.js"></script>
    <script src="javascripts/locale/humanizer.locale.cz.js"></script>


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

