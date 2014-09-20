
$(document).ready(function () {
  var mic = new Wit.Microphone(document.getElementById("microphone"));
  // var info = function (msg) {
  //   document.getElementById("info").innerHTML = msg;
  // };
  // mic.onready = function () {
  //   info("Microphone is ready to record");
  // };
  // mic.onaudiostart = function () {
  //   info("Recording started");
  // };
  // mic.onaudioend = function () {
  //   info("Recording stopped, processing started");
  // };
  // mic.onerror = function (err) {
  //   info("Error: " + err);
  // };
  mic.onresult = function (intent, entities) {
    var r = kv("intent", intent);
    if(intent == 'send_sms') {
      console.log(entities);

      var data = entities.phone_number;

      var number = data.value;

      number = number.replace(' ', '');

      console.log(number);

      $('#inputPhoneNumber').val(number)

      for (var k in entities) {
        var e = entities[k];

        if (!(e instanceof Array)) {
          r += kv(k, e.value);
        } else {
          for (var i = 0; i < e.length; i++) {
            r += kv(k, e[i].value);
          }
        }
      }

    }
    else {
      alert('retry');
    }
    // document.getElementById("result").innerHTML = r;
  };
  mic.connect("JRRNE7PA35SV5RKCX2TCE7ISW6Q5A6IK");
  // mic.start();
  // mic.stop();

  function kv (k, v) {
    if (toString.call(v) !== "[object String]") {
      v = JSON.stringify(v);
    }
    return k + "=" + v + "\n";
  }
});