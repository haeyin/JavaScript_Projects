//need to understand some more basics...
function Nature(Name, Strong, Weak) {
    this.Element_Name = Name;
    this.Element_Strong = Strong;
    this.Element_Weak = Weak;
    this.text = this.Element_Name + " is strong against " + this.Element_Strong + " but weak against " + this.Element_Weak + ".";
    }

var fire = new Nature("Fire", "Wood", "Water");
var water = new Nature("Water", "Fire", "Wood");
var wood = new Nature("Wood", "Water", "Fire");

function Elemental() {
    function waterElemental() {
        document.getElementById("Nested_Function_Water").innerHTML = water.text;
    }

    waterElemental();
}
