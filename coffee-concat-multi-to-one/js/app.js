(function() {
  var str;

  str = 'sweet';

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
