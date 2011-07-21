(function() {
  var d, h, m, s;
  s = function(sec) {
    return sec * 1000;
  };
  m = function(min) {
    return min * s(60);
  };
  h = function(hr) {
    return hr * m(60);
  };
  d = function(day) {
    return day * h(24);
  };
  test("less than 5 seconds", function() {
    return equal(Humanizer.timeAgo(new Date(), true), "less than 5 seconds");
  });
  test("less than 10 seconds", function() {
    return equal(Humanizer.timeAgo(new Date() - s(5), true), "less than 10 seconds");
  });
  test("less than 20 seconds", function() {
    return equal(Humanizer.timeAgo(new Date() - s(10), true), "less than 20 seconds");
  });
  test("half a minute", function() {
    return equal(Humanizer.timeAgo(new Date() - s(30), true), "half a minute");
  });
  test("less than a minute", function() {
    return equal(Humanizer.timeAgo(new Date() - s(40), true), "less than a minute");
  });
  test("2 minutes", function() {
    return equal(Humanizer.timeAgo(new Date() - m(2), true), "2 minutes");
  });
  test("display today", function() {
    return equal(Humanizer.timeAgo(new Date()), "less than a minute");
  });
  test("display yesterday", function() {
    return equal(Humanizer.timeAgo(new Date() - d(1)), "1 day");
  });
  test("display tomorrow", function() {
    return equal(Humanizer.timeAgo(new Date(new Date().getTime() + d(1))), "1 day");
  });
  test("return future number of days", function() {
    return equal(Humanizer.timeAgo(new Date(new Date().getTime() + d(4))), "4 days");
  });
  test("return past days ago", function() {
    return equal(Humanizer.timeAgo(new Date(new Date().getTime() + d(4))), "4 days");
  });
  test("return formatted archived date", function() {
    return equal(Humanizer.timeAgo(new Date(new Date().getTime() + d(100))), "3 months");
  });
  test("return formatted archived year date", function() {
    return equal(Humanizer.timeAgo(new Date() - d(500)), "over 1 year");
  });
  test("display now as a minute ago", function() {
    return equal(Humanizer.timeAgo(new Date() - m(1)), "1 minute");
  });
  test("display a few minutes ago", function() {
    return equal(Humanizer.timeAgo(new Date() - m(4)), "4 minutes");
  });
  test("display an hour ago", function() {
    return equal(Humanizer.timeAgo(new Date() - h(1) - m(5)), "about 1 hour");
  });
  test("display a few hours ago", function() {
    return equal(Humanizer.timeAgo(new Date() - h(3) - m(5)), "about 3 hours");
  });
  test("display a day ago", function() {
    return equal(Humanizer.timeAgo(new Date() - d(1)), "1 day");
  });
  test("display a few days ago", function() {
    return equal(Humanizer.timeAgo(new Date() - d(5) - m(5)), "5 days");
  });
  test("display a month ago", function() {
    return equal(Humanizer.timeAgo(new Date() - d(32) - m(5)), "about 1 month");
  });
  test("display a few months ago", function() {
    return equal(Humanizer.timeAgo(new Date() - d(180) - m(5)), "6 months");
  });
  test("display a year ago", function() {
    return equal(Humanizer.timeAgo(new Date() - d(365) - m(5)), "about 1 year");
  });
  test("display a few years ago", function() {
    return equal(Humanizer.timeAgo(new Date() - d(2800) - m(5)), "over 7 years");
  });
}).call(this);
