
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});
const firstNameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email1");
const form = document.getElementById("contactus");
const nameError = document.getElementById("name-feedback");
const lastNameError = document.getElementById("last-name-feedback");
const emailError = document.getElementById("email-feedback");

form.addEventListener("submit", (e) => {
    let note = [];
    let note2 = [];
    let note3 = [];

    let name = firstNameInput.value;
    let lastName = lastNameInput.value;
    let emailV = emailInput.value;
    if (name.length === 0) {
        note.push("name is required");
    }
    if (lastName.length === 0) {
        note2.push("last name is required");
    }

    if (!validateEmail(emailV)) {
        note3.push("email is invalid");
    }
    if (note.length > 0) {
        e.preventDefault();
        nameError.innerText = note.join(", ");
    }
    if (note2.length > 0) {
        e.preventDefault();
        lastNameError.innerText = note2.join(", ");
    }
    if (note3.length > 0) {
        e.preventDefault();
        emailError.innerText = note3.join(", ");
    }
});

let letters = "abcdefghijklmnopqrstuvwxyz".split("");

function validateEmail(email) {
    return (
        email.length > 0 &&
        email.indexOf("@") != -1 &&
        (email.endsWith(".com") ||
            email.endsWith(".co.il") ||
            email.endsWith(".org"))
    );
}