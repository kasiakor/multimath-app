"use strict";
function startGame() {
    var playersName = "Gia";
    logPlayer(playersName);
    var messagesElement = document.getElementById("messages");
    messagesElement.innerText = "Welcome to MultiMath, Let's start a new game!";
}
function logPlayer(name) {
    console.log("The new game starts for player " + name);
}
document.getElementById("startGame").addEventListener("click", startGame);
//# sourceMappingURL=app.js.map