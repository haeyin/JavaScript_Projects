document.write(typeof "What");

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

document.write(10 > 100);

console.log(5 + 4);

document.write("20" + 9);

console.log(9 < 5);

document.write(5 == 5);

document.write(4 == 13);

A = "Dani";
B = "Dani";
document.write(A === B);

C = 1098;
D = 1088;
document.write(C === D);

W = 17;
Z = "Seventeen";
document.write(W === Z);

X = "Harry";
Y = "Potter";
document.write(X === Y);

document.write(3 < 4 && 6 > 3);
document.write(5 > 6 && 10 > 5);

function not_Functiona() {
    document.getElementById("NotA").innerHTML = !(6 > 9);
}

function not_Functionb() {
    document.getElementById("NotB").innerHTML = !(100 > 10);
}
