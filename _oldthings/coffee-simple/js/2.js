(function() {
  var str;

  str = 'tasty';

  (function() {
    return alert("coffee is " + str);
  })();

  (function() {
    return alert("coffee is " + str);
  })();

  (function() {
    return alert("coffee is " + str);
  })();

  (function() {
    return alert("coffee is " + str);
  })();

  (function() {
    return alert("coffee is " + str);
  })();

}).call(this);
