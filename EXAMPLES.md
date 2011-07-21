## Examples
```
 # Helper functions
s = (sec)-> sec * 1000
m = (min)-> min * s(60)
h = (hr)-> hr * m(60)
d = (day)-> day * h(24)
from = new Date()
to = new Date() + 6*d(365) + d(19)

coffee> Humanizer.between(from, from - m(65))
"about 1 hour"
coffee> Humanizer.between(from, from + s(15))
"less than a minute"
coffee> Humanizer.between(from, from + s(15), true)
"less than 20 seconds"
coffee> Humanizer.between(from, from + h(60))
"about 3 days"
coffee> Humanizer.between(from, from + s(45), true)
"less than a minute"
coffee> Humanizer.between(from, from + s(76))
"1 minute"
coffee> Humanizer.between(from, from + d(368))
"about 1 year"
coffee> Humanizer.between(from, from + d(365)*3 + d(180))
"over 3 years"
coffee> Humanizer.between(from, to, true)
"about 6 years"
coffee> Humanizer.between(to, from, true)
"about 6 years"
coffee> Humanizer.between(new Date(), new Date())
"less than a minute"

coffee> Humanizer.timeAgo(new Date() + m(3))
"3 minutes"
coffee> Humanizer.timeAgo(new Date() - h(15))
"15 hours"
coffee> Humanizer.timeAgo(new Date())
"less than a minute"
```

