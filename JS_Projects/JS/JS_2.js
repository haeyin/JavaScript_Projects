function validateForm() {
    var first = document.forms["Contact"]["firstname"].value;
    if (first == "") {
        alert("First name must be filled out");
        return false;
    }
    var last = document.forms["Contact"]["lastname"].value;
    if (last == "") {
        alert("Last name must be filled out");
        return false;
    }
    var email = document.forms["Contact"]["email"].value;
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    var phone = document.forms["Contact"]["phone"].value;
    if (phone == "") {
        alert("Phone number must be filled out");
        return false;
    } else if (isNaN(phone)) {
        alert("Phone number must be digits only");
        return false;
    }
}

function openForm() {
    document.getElementById("formception").style.display = "block";
}

function closeForm() {
    document.getElementById("formception").style.display = "none";
}

function opnfrm() {
    document.getElementById("fmcptn").style.display = "block";
}