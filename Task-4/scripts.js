function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    return true;
}

function updateContent() {
    let contentDiv = document.getElementById("dynamic-content");
    contentDiv.innerHTML = "<p>The content has been updated!</p>";
}
