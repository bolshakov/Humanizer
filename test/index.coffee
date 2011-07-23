assert    = require "assert"
humanizer = require "../lib/humanizer"

# Load `en` locale -- hack, until we come up with a proper way of
# loading locales.
for key, value of require "../lib/locales/humanizer.en"
  humanizer[key] = value

# Helper time functions
s = (sec) -> sec * 1000
m = (min) -> min * s(60)
h = (hr)  -> hr  * m(60)
d = (day) -> day * h(24)

test = (name, f) ->
  module.exports[name] = f

test "less than 5 seconds", ->
  assert.eql humanizer.since(Date.now(), true), "less than 5 seconds"

test "less than 10 seconds", ->
  assert.eql humanizer.since(Date.now() - s(5), true), "less than 10 seconds"

test "less than 20 seconds", ->
  assert.eql humanizer.since(Date.now() - s(10), true), "less than 20 seconds"

test "half a minute", ->
  assert.eql humanizer.since(Date.now() - s(30), true), "half a minute"

test "less than a minute", ->
  assert.eql humanizer.since(Date.now() - s(40), true), "less than a minute"

test "2 minutes", ->
  assert.eql humanizer.since(Date.now() - m(2), true), "2 minutes"

test "display today", ->
  assert.eql humanizer.since(Date.now()), "less than a minute"

test "display yesterday", ->
  assert.eql humanizer.since(Date.now() - d(1)), "1 day"

test "display tomorrow", ->
  assert.eql humanizer.since(new Date(Date.now() + d(1))), "1 day"

test "return future number of days", ->
  assert.eql humanizer.since(new Date(Date.now() + d(4))), "4 days"

test "return past days ago", ->
  assert.eql humanizer.since(new Date(Date.now() + d(4))), "4 days"

test "return formatted archived date", ->
  assert.eql humanizer.since(new Date(Date.now() + d(100))), "3 months"

test "return formatted archived year date", ->
  assert.eql humanizer.since(Date.now() - d(500)), "over 1 year"

test "display now as a minute ago", ->
  assert.eql humanizer.since(Date.now() - m(1)), "1 minute"

test "display a few minutes ago", ->
  assert.eql humanizer.since(Date.now() - m(4)), "4 minutes"

test "display an hour ago", ->
  assert.eql humanizer.since(Date.now() - h(1) - m(5)), "about 1 hour"

test "display a few hours ago", ->
  assert.eql humanizer.since(Date.now() - h(3) - m(5)), "about 3 hours"

test "display a day ago", ->
  assert.eql humanizer.since(Date.now() - d(1)), "1 day"

test "display a few days ago", ->
  assert.eql humanizer.since(Date.now() - d(5) - m(5)), "5 days"

test "display a month ago", ->
  assert.eql humanizer.since(Date.now() - d(32) - m(5)), "about 1 month"

test "display a few months ago", ->
  assert.eql humanizer.since(Date.now() - d(180) - m(5)), "6 months"

test "display a year ago", ->
  assert.eql humanizer.since(Date.now() - d(365) - m(5)), "about 1 year"

test "display a few years ago", ->
  assert.eql humanizer.since(Date.now() - d(2800) - m(5)), "over 7 years"

test "between and distanceOfTime are the same functions", ->
  assert.eql humanizer.distanceOfTime, humanizer.between
