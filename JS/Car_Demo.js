function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Clare = new Vehicle("Mini Cooper", "Countryman", 2009, "Pale Blue");



function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Clare drives a " + Clare.Vehicle_Color + "-colored " + Clare.Vehicle_Make + " manufactured in " + Clare.Vehicle_Year + ".";
}
