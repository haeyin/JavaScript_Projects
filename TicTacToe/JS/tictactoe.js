var arrayO = document.getElementsByClassName("O");
var arrayX = document.getElementsByClassName("X");
for (var i=0; i<arrayO.length;i++) {
    arrayO[i].style.transform = "translateY(-100%)";
}
for (var i=0; i<arrayX.length;i++) {
    arrayX[i].style.transform = "translateY(100%)";
}
// document.getElementById(id).style.property = new style