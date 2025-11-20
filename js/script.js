welcomeMessege();

function welcomeMessege() {
    let userName = prompt("Please enter your name:");

    if (userName === '' || userName === null) {
        useName("Guest");
    }

    document.getElementById("welcome-speech").innerHTML = "Welcome " + userName + "!";
}
    function validateform() {}

