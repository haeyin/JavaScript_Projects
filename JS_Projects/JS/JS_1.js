function Element_Choice() {
    var Element_Output;
    var Elements = document.getElementById("HTML_Input").value;
    var nature_string = " is a great element!";
    switch(Elements) {
        case "Fire":
            Element_Output = "Fire" + nature_string;
        break;
        case "Water":
            Element_Output = "Water" + nature_string;
        break;
        case "Wind":
            Element_Output = "Wind" + nature_string;
        break;
        case "Earth":
            Element_Output = "Earth" + nature_string;
        break;
        default:
        Element_Output = "Please enter an element exactly as written on the list above.";
    }
    document.getElementById("Output").innerHTML = Element_Output;
}

function changeFunction() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "Has changed!!!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "20px Cambria";
ctx.strokeText("Viva La Vida", 10,50);

var d = document.getElementById("myCanvas2");
var dtx = d.getContext("2d");
var grd = dtx.createLinearGradient(0,0,200,0);
grd.addColorStop(0, "black");
grd.addColorStop(.5, "green")
grd.addColorStop(1, "white");
dtx.fillStyle = grd;
dtx.fillRect(10,10,250,100);

