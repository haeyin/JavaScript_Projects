function Full() {
    var p1 = "JavaScript ";
    var p2 = "slowly becoming ";
    var p3 = "easier. ";
    var p4 = "At least, ";
    var p5 = "I hope it is.";
    var Full_Sentence = p1.concat(p2, p3, p4, p5);
    document.getElementById("Concat").innerHTML = Full_Sentence;
}

function slice_Method() {
    var Sentence = "In a time long gone by...There was once a hero.";
    var Section = Sentence.slice(42,46);
    document.getElementById("Slice").innerHTML = Section;
}

function Uppercase() {
    var str = "Hello I'm uppercase!";
    var res = str.toUpperCase();
    document.getElementById("change").innerHTML = res;
}

function Search_Str() {
    var str = "This is a random string that is being searched by a computer.";
    var s = str.search("searched");
    document.getElementById("Find").innerHTML = s;
}

function string_Method() {
    var X = 254;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 3.1415926535897932384;
    document.getElementById("Precision").innerHTML = X.toPrecision(8);
}

function decimal_Points() {
    var X = 3.1415926535897932384;
    var n = X.toFixed(4);
    document.getElementById("Decimal").innerHTML = n;
}

function value_Method() {
    var Y = 150;
    var n = Y.valueOf();
    document.getElementById("Value_of").innerHTML = n;
}