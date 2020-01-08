function displayType(school) {
    var schoolName = school.getAttribute("data-school-name");
    alert(schoolName + " is located in " + school.innerHTML);
}