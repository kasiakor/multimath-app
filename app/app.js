function startGame() {
    //start new game
    var playersName = getInputValue("playername");
    logPlayer(playersName);
    postScore(100, playersName);
    postScore(-5, playersName);
}
function logPlayer(name) {
    if (name === void 0) { name = "MultiMath Player"; }
    console.log("The new game starts for player " + name);
}
function getInputValue(elementID) {
    var elementTarget = document.getElementById(elementID);
    if (elementTarget.value === "") {
        return undefined;
    }
    else {
        return elementTarget.value;
    }
}
function postScore(score, playersName) {
    if (playersName === void 0) { playersName = "MultiMath Player"; }
    var scoreTarget = document.getElementById("postedScores");
    scoreTarget.innerText = score + " - " + playersName;
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    logger("Score is " + score);
}
var logMessage = function (message) { return console.log(message); };
function logError(err) {
    console.log(err + ", an error");
}
document.getElementById("startGame").addEventListener("click", startGame);
var firstPlayer = new Player();
firstPlayer.name = "Giovanna";
console.log(firstPlayer.formatName());
// let myResult: Result = {
//     playerName: "Gia",
//     score: 12,
//     problemCount: 8,
//     factor: 2
// };
// //implement the interface with an object literal
// let player:Person = {
//     name: "Daniel",
//     formatName: () => "Dan"
// };
