const reqUsername = "";
const reqPassword = "";

document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.querySelector(".login-container");
    const iframeContainer = document.querySelector(".iframe-container");
    const loginButton = document.querySelector("#login-button");
    const loginError = document.querySelector("#login-error");
    const logoutButton = document.querySelector("#logout-button");

    loginButton.addEventListener("click", function () {
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        // You can replace this with your own authentication logic
        if (username === reqUsername && password === reqPassword) {
            document.querySelector("#username").value = "";
            document.querySelector("#password").value = "";
            loginContainer.style.display = "none";
            iframeContainer.style.display = "block";
        } else {
            // Authentication failed, show an error message
            loginError.textContent = "Invalid username or password";
        }
    });
    logoutButton.addEventListener("click", function () { // Add this function
        iframeContainer.style.display = "none";
        loginContainer.style.display = "block";
    });
});

//disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

//disable F12 button
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.key == "F12") {
        return false;
    }
}

