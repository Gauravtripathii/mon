var label2 = document.getElementById("name2");
var label1 = document.getElementById("name1");

function print() {
    window.location.href = "/?name=" + label2.value;
}

var urlParams = new URLSearchParams(window.location.search);
label1.innerHTML = urlParams.get('name');


// Countdown Timer
var cd = new Date("Aug 15, 2023 00:00:01").getTime()
var a = setInterval(function() {
    var now = new Date().getTime();
    var diff = cd - now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 24));
    var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + " Days " + hrs + " Hours " + min + " Minutes " + sec + " Seconds ";
    if (distance < 0) {
        clearInterval(a);
        document.getElementById("countdown").innerHTML = "Unexpected Error Occurred";
    }
}, 1000);