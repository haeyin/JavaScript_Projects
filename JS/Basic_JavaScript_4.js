function my_Dictionary() {
    var Game = {
        Name: "Yahtzee",
        Type: "Dice",
        Company: "Hasbro",
        Type: "Yaht Game"
    };
    delete Game.Company;
    document.getElementById("Dictionary").innerHTML = Game.Company;
}

