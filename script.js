const reqUsername = "";
const reqPassword = "";

document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.querySelector(".login-container");
    const iframeContainer = document.querySelector(".iframe-container");
    const loginButton = document.querySelector("#login-button");
    const loginError = document.querySelector("#login-error");
    const logoutButton = document.querySelector("#logout-button");

    const serverAButton = document.querySelector("#serverA-button");
    const serverBButton = document.querySelector("#serverB-button");
    const youtubeIframe = document.querySelector(".youtube-iframe");
    const twitchIframe = document.querySelector(".twitch-iframe");

    serverAButton.classList.add("active");
    youtubeIframe.style.display = "none";
    twitchIframe.style.display = "none";

    serverAButton.addEventListener("click", function () {
        serverAButton.classList.add("active");
        serverAButton.style.backgroundColor = "var(--tertiary)";
        serverBButton.style.backgroundColor = "var(--secondary)";
        serverBButton.classList.remove("active");
        youtubeIframe.style.display = "block";
        twitchIframe.style.display = "none";
    });

    serverBButton.addEventListener("click", function () {
        serverBButton.classList.add("active");
        serverBButton.style.backgroundColor = "var(--tertiary)";
        serverAButton.style.backgroundColor = "var(--secondary)";
        serverAButton.classList.remove("active");
        youtubeIframe.style.display = "none";
        twitchIframe.style.display = "block";
    });

    loginButton.addEventListener("click", function () {
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        // You can replace this with your own authentication logic
        if (username.toLowerCase() === reqUsername && password.toLowerCase() === reqPassword) {
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

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.key == "F12") {
        return false;
    }
}