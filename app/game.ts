/// <reference path="player.ts" />
/// <reference path="result.ts" />
/// <reference path="utility.ts" />
/// <reference path="scoreboard.ts" />


class Game {
    private scoreboard: Scoreboard = new Scoreboard();
    //parameter properties
    constructor(public player: Player, public problemCount: number, public factor: number) {};


    displayGame() {

        //create html for the current game
        let gameForm: string = "";

        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer'+ i +'" class="col-sm-2 control-label">' ;
            gameForm += String(this.factor) + "x" + i + '=</label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '"size = "5"/></div>';
            gameForm += '</div>';
        }

        //add new game to page
        let gameDisplay: HTMLElement = document.getElementById("game")!;
        gameDisplay.innerHTML = gameForm;

        //enable calculate button
        document.getElementById("calculate")!.removeAttribute("disabled");
    }

    calculateScore() {
        let score: number = 0;
        //loop through text boxes and calculate
        for (let i = 1; i <= this.problemCount; i++) {
            const answer: number = Number(Utility.getInputValue("answer" + i));
            if(i * this.factor === answer) {
                score ++;
            }
        }
        
        //create new result obj to pass to scoreboard
        const result: Result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };

        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();

        //disable calculate button
        document.getElementById("calculate")!.setAttribute("disable", "true");

    }
}