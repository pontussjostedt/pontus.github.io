var canvas = null;
var ctx = null;
document.addEventListener("mousemove", function (event) {
    draw(event); 
});

xs = []
ys = []
function draw(event) {
    var canvas = document.getElementById("myCanvas"); 
    var c = canvas.getContext("2d");
    var x = event.clientX;
    var y = event.clientY;
    xs.push(x)
    ys.push(y)
    c.strokeStyle = "blue";
    c.beginPath();
    c.moveTo(xs[0], ys[0]);
    for (var i = 1; i < xs.length; i++) {
        c.lineTo(xs[i], ys[i]);
    }
    c.stroke();
}

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("myCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

