var start = document.getElementById("start"); 
var check = document.getElementById("hidChek"); 
start.onclick = function () {
check.checked = !check.checked;
}


var x = (Math.random() - 0.5) * 400;
var y = (Math.random() - 0.5) * 400;
var BALL = document.querySelector (".ball"); 