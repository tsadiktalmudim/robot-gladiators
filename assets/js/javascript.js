document.getElementById("grow").addEventListener("click", function() {

    document.getElementById("box").style.height = "500px";
    document.getElementById("box").style.width = "500px";

});

document.getElementById("blue").addEventListener("click", function() {

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("fade").addEventListener("click", function() {

    document.getElementById("box").style.opacity = "0.5";

});

document.getElementById("Abs").addEventListener("click", function() {

    document.getElementById("box").style.position = "absolute";

});

document.getElementById("reset").addEventListener("click", function() {

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.position = "relative";

});