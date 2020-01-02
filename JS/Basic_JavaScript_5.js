document.write(typeof "What");
document.write("<br/>") 

function FunctionA() {
    document.getElementById("Test").innerHTML = 0/0;
}

function FunctionB() {
    document.getElementById("Test2").innerHTML = isNaN('this is a string');
}

function FunctionC() {
    document.getElementById("Test3").innerHTML = isNaN('911');
}

function In() {
    document.getElementById("infinity").innerHTML = 4E309;
}

function Neg_In() {
    document.getElementById("neg_infinity").innerHTML = -5E310
}

document.write(10 > 4);
document.write("<br/>")

document.write(10 > 100);
document.write("<br/>")

console.log(5 + 4);

document.write("20" + 9);
document.write("<br/>")

console.log(9 < 5);

document.write(5 == 5);
document.write("<br/>")

document.write(4 == 13);
document.write("<br/>")

A = "Dani";
B = "Dani";
document.writeln(A === B);

C = 1098;
D = 1088;
document.writeln(C === D);

W = 17;
Z = "17";
document.writeln(W === Z);

X = "Harry";
Y = "Potter";
document.writeln(X === Y);

document.writeln(3 < 4 && 6 > 3);
document.writeln(5 > 6 && 10 > 5);
document.write("<br/>")

document.writeln(3 > 4 || 4 > 3)
document.writeln(3 > 9 || 1 > 9)
document.write("<br/>")


function not_Functiona() {
    document.getElementById("NotA").innerHTML = !(6 > 9);
    document.write("<br/>")
}

function not_Functionb() {
    document.getElementById("NotB").innerHTML = !(100 > 10);
    document.write("<br/>")
}
