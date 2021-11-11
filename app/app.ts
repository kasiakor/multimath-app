function startGame() {
    //start new game

    let playersName: string | undefined =  getInputValue("playername");
    logPlayer(playersName);

    postScore(100, playersName);
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
}

document.getElementById("startGame")!.addEventListener("click", startGame);