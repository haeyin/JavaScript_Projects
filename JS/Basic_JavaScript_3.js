function FunctionA() {
    var plus = 5 + 2; 
    document.getElementById("MathA").innerHTML = "5 + 2 = " + plus;
}

function FunctionB() {
    var minus = 9 - 3;
    document.getElementById("MathB").innerHTML = "9 - 3 = " + minus;
}

function FunctionC() {
    var times = 6 * 7;
    document.getElementById("MathC").innerHTML = "6 * 7 = " + times;
}

function FunctionD() {
    var divide = 45 / 9;
    document.getElementById("MathD").innerHTML = "45 / 9 = " + divide;
}

function FunctionE() {
    var Maths = (3+8) * (7-1) / (4-2);
    document.getElementById("MathE").innerHTML = "3 plus 8, multiplied by 7 minus 1, divided by 4 minus 2 equals " + Maths;
}

function FunctionF() {
    var Remains = 21 % 5;
    document.getElementById("MathF").innerHTML = "21 divided 5 has a remainder of: " + Remains;
}

function FunctionG() {
    var y = 6;
    document.getElementById("MathG").innerHTML = -y
}

function FunctionH() {
    var X = 100;
    X++;
    document.getElementById("MathH").innerHTML = X;
}

function FunctionI() {
    var X = -50;
    X--;
    document.getElementById("MathI").innerHTML = X;
}

function FunctionJ() {
    document.getElementById("MathJ").innerHTML = (Math.random()*100)
}

window.alert(Math.random()*50)

function FunctionK() {
    document.getElementById("MathK").innerHTML = (Math.pow(6,3));
}
