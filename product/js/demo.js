function resize() {
    document.documentElement.style.fontSize = innerWidth / 20 + "px"
}
window.onresize = function () {
    resize()
}, resize();
var i = 0, arrDiv = document.querySelectorAll(".fot");
for (arrLen = arrDiv.length; i < arrLen;)arrDiv[i].addEventListener("touchstart", function () {
    console.log("touchstart")
}), arrDiv[i].addEventListener("touchmove", function () {
    console.log("touchmove")
}), arrDiv[i].addEventListener("touchend", function () {
    console.log("touchend")
}), i++, console.log("hello me");
