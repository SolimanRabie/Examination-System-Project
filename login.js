const form = document.getElementById("login-form");
const email = document.getElementById("login-email")
const password = document.getElementById("login-password")
const message = document.getElementById("login-message");
const message2 = document.getElementById("pass-message");
form.addEventListener("submit", function(e){
e.preventDefault();
message.textContent = "";
message2.textContent = "";
message.className = "text-danger small d-block mt-1";
message2.className = "text-danger small d-block mt-1";

let users = JSON.parse(localStorage.getItem("users")) || [];
let user =users.find((user)=>user.email === email.value.trim())
if(!user){
    message.textContent = "This email is not registered";

}
else if(user.password !== password.value.trim()){
    message2.textContent = "Incorrect password. Please try again.";
}
else{
    //message2.textContent = "Login success";
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));
window.location.href="test.html";
}

});
