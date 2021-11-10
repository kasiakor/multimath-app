function startGame() {
    //start new game

    let playersName: string | undefined;
    playersName =  undefined;
    logPlayer(playersName);
    var messagesElement = document.getElementById("messages");
    messagesElement!.innerText = "Welcome to MultiMath, Let's start a new game!";
}

function logPlayer(name: string | undefined) {
    console.log(`The new game starts for player ${name}`);
}

document.getElementById("startGame")!.addEventListener("click", startGame);