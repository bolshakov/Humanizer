## Overview
Humanizer library contains functions aimed to convert distance between two dates into it’s representation in words.

### Humanizer.between(from, to, includeSeconds)
Reports the approximate distance in time between two `Date` objects or integers as microseconds.

Set `includeSeconds` to true if you want more detailed approximations when distance < 1 min, 29 secs.

Distances are reported based on the following table:
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

With `includeSeconds = true` and the difference < 1 minute 29 seconds:
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

#### Examples
```
 # Helper functions
s = (sec)-> sec * 1000
m = (min)-> min * s(60)
from = new Date()

coffee> Humanizer.between(from, from - m(65))
"about 1 hour"
coffee> Humanizer.between(from, from + s(15), true)
"less than 20 seconds"
```

### Humanizer.timeAgo(from, to, includeSeconds)
Like between, but where `to` is fixed to new Date().

#### Examples
```
coffee> Humanizer.timeAgo(new Date() + m(3))
"3 minutes"
coffee> Humanizer.timeAgo(new Date())
"less than a minute"
```

## Usage
Add humanize.js into your html file and then include locales needed:

    <script src="javascripts/humanizer.js"></script>
    <script src="javascripts/locale/humanizer.locale.cz.js"></script>
    <script src="javascripts/locale/humanizer.locale.en.js"></script>

## Building library
Locales can be generated using Cakefile:

    $ cake fetch # Grap locale files from Padrino source

To compile humanizer into JavaScript execute command:

    $ cake compile

To use Cake file you need node.js and coffee-script npm package installed.

## Copyright
Source code was extracted from Padrino project and converted into CoffeeScript. See LICENSE for details.

