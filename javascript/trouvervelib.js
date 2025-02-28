// Set the date we're counting down to
var countDownDate = new Date("April 11, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="days"
  document.getElementById("days").innerHTML = days;

  // Output the result in an element with id="hours"
  document.getElementById("hours").innerHTML = hours;

  // Output the result in an element with id="minutes"
  document.getElementById("minutes").innerHTML = minutes;

  // Output the result in an element with id="seconds"
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, displaying a text some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-box").innerHTML = "EXPIRED";
  }
}, 1000);
