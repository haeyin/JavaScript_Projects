var x = "Harry";

function Variables() {
    var y = "Potter";
    document.getElementById("character").innerHTML = x + " " + z;
}

function get_Hour() {
    if (new Date().getHours() < 18) {
    document.getElementById("4oclock").innerHTML = "How are you this afternoon?";
    }
}

function age_21() {
    var x, text;
    var x = document.getElementById("Age").Value;
    if (x => 21) {
        text = "You can drink! Remember to have a designated driver!";
    } else {
        text = "Sorry, wait until you're old enough.";
    }
    document.getElementById("drink_eligible").innerHTML = text;
}

function height_120() {
    var x, text;
    var x = document.getElementById("Height").Value;
    if (x > 120) {
        text = "You're plenty tall enough!";
    } else if (x = 120) {
        text = "Oh, you're JUST tall enough! Have fun!";
    } else {
        text = "I'm sorry, you're not tall enough. May I suggest the Ferris Wheel?";
    }
    document.getElementById("height_eligible").innerHTML = text;
}
