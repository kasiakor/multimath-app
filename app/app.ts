function startGame() {
    //start new game
    let playersName: string | undefined =  getInputValue("playername");
    logPlayer(playersName);

    postScore(100, playersName);
    postScore(-5, playersName);

}

function logPlayer(name: string = "MultiMath Player"): void {
    console.log(`The new game starts for player ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    const elementTarget: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if(elementTarget.value === "") {
        return undefined;
    }
    else {
        return elementTarget.value;
    }
}

function postScore(score: number, playersName: string = "MultiMath Player"): void {
    const scoreTarget: HTMLElement | null  = <HTMLElement>document.getElementById("postedScores");
    scoreTarget.innerText = `${score} - ${playersName}`;

    let logger: (value:string) => void;
    if(score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    } 

    logger(`Score is ${score}`);
}

const logMessage = (message: string) => console.log(message);

function logError(err: string) {
    console.log(err + ", an error");
}

document.getElementById("startGame")!.addEventListener("click", startGame);

const firstPlayer: Player = new Player();
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