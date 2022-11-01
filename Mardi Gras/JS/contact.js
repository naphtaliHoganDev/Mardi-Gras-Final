
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
const msg = document.getElementById("message1");
const form = document.getElementById("contactus");
const nameError = document.getElementById("name-feedback");
const lastNameError = document.getElementById("last-name-feedback");
const emailError = document.getElementById("email-feedback");
const messageError = document.getElementById("message1Error");

form.addEventListener("submit", (e) => {
    let note = [];
    let note2 = [];
    let note3 = [];
    let note4 = [];


    let name = firstNameInput.value;
    let lastName = lastNameInput.value;
    let emailV = emailInput.value;
    let msgInput = msg.value;
    if (name.length === 0) {
        note.push("First name is required!");
    }
    if (name.length >= 2) {
        note.push("");
    }
    if (lastName.length === 0) {
        note2.push("Last name is required!");
    }
    if (lastName.length >= 1) {
        note2.push("");
    }
    if (!validateEmail(emailV)) {
        note3.push("Email is invalid!");
    }
    if (!validateEmail(emailV) === !validateEmail(emailV)) {
        note3.push("");
    }
    if (msgInput.length === 0) {
        note4.push("Please add a message!");
    }
    if (msgInput.length <= 10) {
        note4.push("A minimum of 10 characters is required.");
    }
    if (msgInput.length >= 10) {
        note4.push("");
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
        emailError.innerText = note3.join(" ");
    }
    if (note4.length > 0) {
        e.preventDefault();
        messageError.innerText = note4.join(", ");
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
