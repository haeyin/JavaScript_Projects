function Error(This, Will, Not, Work) {
    this.Error_This = This;
    this.Error_Will = Will;
    this.Error_Not = Not;
    this.Error_Work = Work;
}

var true = new Error("This", "Won't", "Work", "Anyway");

function Intentional_Error() {
    document.getElementById("New_Error").innerHTML = true.Error_Work;
}