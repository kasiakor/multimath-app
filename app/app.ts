function startGame() {
    var messagesElement = document.getElementById("messages");
    messagesElement.innerText = "Welcome to MultiMath, Let's start a new game!";
}

document.getElementById("startGame").addEventListener("click", startGame);