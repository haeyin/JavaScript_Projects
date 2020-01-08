function Call_Loop() {
    var Digit = "";
    var X = 10;
    while (X >= 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function String_Length() {
    var str = "supercalifragilisticexpialidocious";
    var n = str.length;
    document.getElementById("string_Length").innerHTML = n;
}

var Instruments = ["Violin", "Viola", "Cello", "Flute", "Piccolo", "Oboe"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { //is this just something that will always be true, to list all of them?//
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_actions() {
    var Cats_Can = [];
    Cats_Can[0] = "sleep";
    Cats_Can[1] = "eat";
    Cats_Can[2] = "purr";
    Cats_Can[3] = "be silly";
    document.getElementById("Cat").innerHTML = "Kitties can " + Cats_Can[3] + ".";
}

function constant_function() {
    const Martial_Art = {type:"Taichi", style:"yang", movement:"slow"};
    Martial_Art.type = "Wushu";
    Martial_Art.movement = "snappy";
    document.getElementById("Constant").innerHTML = Martial_Art.type + "'s movements are  " + Martial_Art.movement + ".";
}

var x = 55;
document.write("<br>" + x);
{
    var x = "A string";
    document.write("<br>" + x);
}
document.write("<br>" + x + "<br>");

var x = 50;
document.write(x);
{
    let x = "Not an integer";
    document.write("<br>" + x);
}
document.write("<br>" + x + "<br>");

function return_Function() {
    return Math.PI;
}
document.getElementById("Return").innerHTML = return_Function();

function return_Name() {
    var x = "friend";
    return "Hello " + x + ".";
}
document.getElementById("Return_friend").innerHTML = return_Name(x);

let Instrument = { //creates an object called 'Instrument'
    name: "Violin",
    brand: "Stradivarious",
    year: "1721",
    nickname: "Lady Blunt",
    description : function() {
        return "The " + this.name + " was made in " + this.year + " by " + this.brand + " and nicknamed " + this.nickname + ".";
    }
}
document.getElementById("Instrument_Object").innerHTML = Instrument.description();

var y = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 5) { break; }
    y += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = y;

var z = "";
var k;
for (k = 0; k <= 10; k++) {
    if (k === 5) { continue; }
    z += "The number is " + k + "<br>";
}
document.getElementById("continue").innerHTML = z;