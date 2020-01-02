function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 60) ? "You're too short":"You're tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Eligibility() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote.":"Congratulations! You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

function Fruit(Name, Color, Type) {
    this.Fruit_Name = Name;
    this.Fruit_Color = Color;
    this.Fruit_Type = Type;
}

//Favored fruit//
var Clare = new Fruit("Orange", "Orange", "Citrus");
var Stephanie = new Fruit("Strawberry", "Red", "Berry");
var Collette = new Fruit("Banana", "Yellow", "Berry");

function Fruit_Function() {
    document.getElementById("New_and_This").innerHTML = "A " + Collette.Fruit_Name + " is a " + Collette.Fruit_Color + "-colored " + Collette.Fruit_Type + ".";
}

function Instrument(Name, Section) {
    this.Instrument_Name = Name;
    this.Instrument_Section = Section;
}

var Violin = new Instrument("Violin", "String");


function Nature(Name, Strong, Weak) {
    this.Element_Name = Name;
    this.Element_Strong = Strong;
    this.Element_Weak = Weak;
}

var fire = new Nature("Fire", "Wood", "Water");
var water = new Nature("Water", "Fire", "Wood");
var wood = new Nature("Wood", "Water", "Fire");

function Element_Nature() {
    document.getElementById("Nested_Function").innerHTML = fire.Element_Name + " is strong against " + fire.Element_Strong + " but weak against " + fire.Element_Weak + ".";
}


function Parent_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_two() {
            Starting_point += 2;
        }
        Plus_two();
        return Starting_point;
    }
}

