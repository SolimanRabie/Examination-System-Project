
const form = document.getElementById("registration-form");
const firstName = document.getElementById('first-name');
const fnameError = document.getElementById("fname-error");
const lastName = document.getElementById('last-name');
const lnameError = document.getElementById("lname-error");

const email = document.getElementById('email-address');
const emailError = document.getElementById("email-error");

const password = document.getElementById('password');
const passwordError = document.getElementById("password-error");
const confirmPass = document.getElementById('confirm-password');
const repasswordError = document.getElementById("repassword-error");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isvalid = true;
    let nameRegex = /^[a-zA-Z]{3,15}$/;
    if (!nameRegex.test(firstName.value)) {
        isvalid = false;
        firstName.style.borderColor = "red";
        fnameError.classList.remove('d-none');
    } else {
        fnameError.classList.add("d-none");
        firstName.style.borderColor = "green";
    }
    if (!nameRegex.test(lastName.value)) {
        isvalid = false;
        lastName.style.borderColor = "red";
        lnameError.classList.remove('d-none');
    } else {
        lastName.style.borderColor = "green";
        lnameError.classList.add('d-none');
    }

    let emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegx.test(email.value)) {
        isvalid = false
        emailError.classList.remove("d-none");
        email.style.borderColor = "red";
    } else {
        emailError.classList.add("d-none");
        email.style.borderColor = "green";
    }
    if (password.value.length < 8) {
        isvalid = false;
        passwordError.classList.remove("d-none");
    } else {
        passwordError.classList.add("d-none");
        password.style.borderColor = "green";
    }
    if (confirmPass.value.length < 8 || confirmPass.value !== password.value) {
        isvalid = false;
        repasswordError.classList.remove("d-none")
        confirmPass.style.borderColor = "red";

    } else {
        repasswordError.classList.add("d-none");
        confirmPass.style.borderColor = "green";
    }
    if (isvalid) {
        let newUser = {
            fname: firstName.value.trim(),
            lname: lastName.value.trim(),
            email: email.value.trim(),
            password: password.value.trim()
        }
        //console.log(newUser);
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let exsiting = users.find((user) => user.email === email.value.trim());
        if (exsiting) {
            emailError.innerText = "email already exist try use another email or go to login page";
            emailError.classList.remove("d-none");
            email.style.borderColor = "red";
            return;
        }
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users));
        window.location.replace( "login.html");
    }
})