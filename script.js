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

    // Function to pause or exit the video players
    function pauseVideoPlayers() {
        // Pause the YouTube player
        if (youtubeIframe) {
            const youtubePlayer = youtubeIframe.contentWindow;
            if (youtubePlayer && typeof youtubePlayer.postMessage === "function") {
                youtubePlayer.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        }

        // Pause the Twitch player (you may need to customize this)
        if (twitchIframe) {
            // Replace 'your_channel_here' with your actual Twitch channel name or URL
            twitchIframe.src = "https://www.twitch.tv/?channel=ragingpenguin8604&parent=127.0.0.1";
        }
    }

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

        // Pause or exit video players when switching servers
        pauseVideoPlayers();
    });

    serverBButton.addEventListener("click", function () {
        serverBButton.classList.add("active");
        serverBButton.style.backgroundColor = "var(--tertiary)";
        serverAButton.style.backgroundColor = "var(--secondary)";
        serverAButton.classList.remove("active");
        youtubeIframe.style.display = "none";
        twitchIframe.style.display = "block";

        // Pause or exit video players when switching servers
        pauseVideoPlayers();
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

        // Pause or exit video players when logging in
        pauseVideoPlayers();
    });

    logoutButton.addEventListener("click", function () {
        iframeContainer.style.display = "none";
        loginContainer.style.display = "block";

        // Pause or exit video players when logging out
        pauseVideoPlayers();
    });
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.key == "F12") {
        return false;
    }
}
