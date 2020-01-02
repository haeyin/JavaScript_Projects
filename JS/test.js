//need to understand some more basics...

function Elemental() {
    function Nature(Name, Strong, Weak) {
        this.Element_Name = Name;
        this.Element_Strong = Strong;
        this.Element_Weak = Weak;
        }
        
    var fire = new Nature("Fire", "Wood", "Water");
    var water = new Nature("Water", "Fire", "Wood");
    var wood = new Nature("Wood", "Water", "Fire");
    
    function fireElemental() {
        document.getElementById("Nested_Function_Fire").innerHTML = fire.Element_Name + " is strong against " + fire.Element_Strong + " but weak against " + fire.Element_Weak + ".";
    }    
    function waterElemental() {
        document.getElementById("Nested_Function_Water").innerHTML = water.Element_Name + " is strong against " + water.Element_Strong + " but weak against " + water.Element_Weak + ".";    
    }
    function woodElemental() {
        document.getElementById("Nested_Function_Wood").innerHTML = wood.Element_Name + " is strong against " + wood.Element_Strong + " but weak against " + wood.Element_Weak + ".";
    }

    fireElemental();
    waterElemental();
    woodElemental();
}


