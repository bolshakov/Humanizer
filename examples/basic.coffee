# `Humanizer` usage example
# -------------------------

# Make sure you built locales with, otherwise, this example won't tick.
#
#     $ cake build:translations

sys       = require "sys"
Humanizer = require "../lib/humanizer"

# Load `en` locale -- hack, until we come up with a proper way of
# loading locales.
for key, value of require "../lib/locales/humanizer.en"
  Humanizer[key] = value

# First some helper functions, could've been a lot nicer if JS allowed
# method lookups on `Number` instances.
s = (sec) -> sec * 1000         # toSeconds
m = (min) -> min * s(60)        # toMinutes
h = (hr)  -> hr  * m(60)        # toHours
d = (day) -> day * h(24)        # toDays

# Lets, start with today and head to the future.
from = new Date()
to   = from + 6 * d(365) + d(19)

showOff = (expected, arguments...) ->
  result = Humanizer.between.apply Humanizer, arguments

  sys.puts "< Expecting '#{expected}'"
  sys.puts "> Got '#{result}'"

showOff "about 1 hour",         from, from - m(65)
showOff "less than a minute",   from, from + s(15)
showOff "less than 20 seconds", from, from + s(15), true
showOff "about 3 days",         from, from + h(60)
showOff "less than a minute",   from, from + s(45), true
showOff "1 minute",             from, from + s(76)
showOff "about 1 year",         from, from + d(368)
showOff "over 3 years",         from, from + d(365) * 3 + d(180)
showOff "about 6 years",        from, to, true
showOff "about 6 years",        to, from, true
showOff "less than a minute",   new Date(), new Date()
