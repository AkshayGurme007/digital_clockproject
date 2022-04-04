function clock() {
  var hours = document.getElementById("hour");
  var minutes = document.getElementById("min");
  var seconds = document.getElementById("sec");
  var am = document.getElementById("ampm");

  var time = new Date();

  var hrs = time.getHours();
  var mins = time.getMinutes();
  var secs = time.getSeconds();
  var am_pm = "AM";

  var container = [];

  if (hrs == 0) {
    hrs = 12;
  }

  if (hrs > 12) {
    hrs = hrs - 12;
    am_pm = "PM";
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  hours.innerText = hrs;
  minutes.innerText = mins;
  seconds.innerText = secs;
  am.innerText = am_pm;
}
setInterval(clock, 1000);

function updatediv() {
  var invalue = document.getElementById("wakeup");
  var value = invalue.options[invalue.selectedIndex].text;
  document.getElementById("selected_time").innerHTML = "Wake up Time :" + value;

  var invalue = document.getElementById("lunch");
  var value = invalue.options[invalue.selectedIndex].text;
  document.getElementById("selected_time1").innerHTML = "Lunch Time : " + value;

  var invalue = document.getElementById("nap");
  var value = invalue.options[invalue.selectedIndex].text;
  document.getElementById("selected_time2").innerHTML = "Nap Time : " + value;

  var invalue = document.getElementById("night");
  var value = invalue.options[invalue.selectedIndex].text;
  document.getElementById("selected_time3").innerHTML = "Nap Time : " + value;
}

function Settime() {
  var w = document.getElementById("wakeup").value;
  var l = document.getElementById("lunch").value;
  var n = document.getElementById("nap").value;
  var s = document.getElementById("night").value;
  var hour = new Date().getHours();

  if (w == hour) {
    document.getElementById("img").style.backgroundImage =
      "url(./images/morning_img.jpg)";
    document.getElementById("box1").innerHTML =
      "GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("box2").innerHTML = "GOOD MORNING!! WAKE UP !!";
  }

  if (l == hour) {
    document.getElementById("img").style.backgroundImage =
      "url(./images/Afternoon_img.jpg)";
    document.getElementById("box1").innerHTML = "Let's Have Some Lunch !!";
    document.getElementById("box2").innerHTML =
      "Good Afternoon !! Take Some Sleep";
  }

  if (n == hour) {
    document.getElementById("img").style.backgroundImage ="url(./images/lunch_image.jpg)";
    document.getElementById("box1").innerHTML = "Stop Yawning,Get Some Tea..!!";
    document.getElementById("box2").innerHTML = "Good Evening ";
  }
  
  if (s == hour) {
    document.getElementById("img").style.backgroundImage =
      "url(./images/night_img.jpg)";
    document.getElementById("box1").innerHTML =
      "Close Your Eyes And Go TO Sleep";
    document.getElementById("box2").innerHTML = "Good Night !!";
  }
  updatediv();
}
