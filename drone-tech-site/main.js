
function emailValidator(){
    let email = document.getElementById("email-input").value;
    let emailWarning = document.getElementById("email-warning");
    const reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (reEmail.test(email)) {
        emailWarning.style.display = "none";
    }
    else {
        emailWarning.style.display = "block";
    }
}

document.getElementById("email-input").addEventListener("input", emailValidator);

function telValidator() {
    let tel = document.getElementById("tel-input").value;
    const reTel = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    let telWarning = document.getElementById("tel-warning");
    if (reTel.test(tel)) {
        telWarning.style.display = "none";
    }
    else {
        telWarning.style.display = "block";
    }
}

document.getElementById("tel-input").addEventListener("input", telValidator);

function search() {
    let searchBox = document.getElementById("searchBox");
    let menuItems = document.getElementsByClassName("menu-item");
    
    if (searchBox.style.display === "none") {
        searchBox.style.display = "inline";
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "none";
        }
    }

    else {
        searchBox.style.display = "none";
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].style.display = "inline";
        }
    }
}