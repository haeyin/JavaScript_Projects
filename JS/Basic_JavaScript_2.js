function TimeDate() {
    document.getElementById("Time").innerHTML = Date();
}

function FunctionA() {
    var sentence = "is Javascript";
    sentence += " so confusing?";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function FunctionB() {
    m = document.getElementById("test").value;
    document.getElementById("Miles_To_Yards").innerHTML = m*1760 + " Yards";
}

