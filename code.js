//display one of 3 variables (rock, paper, scissor)
function getComputorChoice() {
    const cchoice = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * cchoice.length);
    return cchoice[random];
}



//playercounter
let i = 0;
let playercounter = document.getElementById("pcounter");
//computorcounter
let j = 0;
let computorcounter = document.getElementById("ccounter");



//ending game when one has 5 points & result
function disable(){
    buttonrock.disabled = true;
    buttonpaper.disabled = true;
    buttonscissor.disabled = true;
}



//all 3 buttons display round played
//button paper execute play
let buttonrock = document.getElementById("rock");
buttonrock.addEventListener("click", rockround);

function rockround(){
    //adding divs for showing decisions
    let container = document.getElementById("container");
    let round = document.createElement("div");
    round.classList.add("round");
    container.appendChild(round);

    let playerchoice = document.createElement("div");
    playerchoice.classList.add("playerchoice");
    round.appendChild(playerchoice);
    let result = document.createElement("div");
    result.classList.add("result");
    round.appendChild(result);
    let computorchoice = document.createElement("div");
    computorchoice.classList.add("computorchoice");
    round.appendChild(computorchoice);

    //adding computorchoice into divs
    computorchoice.innerText = getComputorChoice();

    //adding playerchoice ROCK
    playerchoice.innerText = "rock";

    //adding result
    result.innerText = rockcompare();
    function rockcompare(){
        let a = playerchoice.innerText;
        let b = computorchoice.innerText;
        let string = a+b;
        if (string ==="rockrock") {
            return "Its a Tie! Try again.";
        }
        if (string ==="rockscissor") {
            i++;
            playercounter.innerText = i;
            return "You win! Rock beat\’s scissor";
        }
        if (string ==="rockpaper") {
            j++;
            computorcounter.innerText = j;
            return "You lose! Paper beat\’s rock";
        }
    }
    //showing result and disable when reached score of 5
    if(i === 5){
        let result = document.getElementById("result");
        result.innerText = "You Won! " + i + " : " + j;
        disable();
    }
    if(j === 5){
        let result = document.getElementById("result");
        result.innerText = "You Lost! " + i + " : " + j;
        disable();
    }
}


//button paper execute play
let buttonpaper = document.getElementById("paper");
buttonpaper.addEventListener("click", paperround);

function paperround(){
    //adding divs for showing decisions
    let container = document.getElementById("container");
    let round = document.createElement("div");
    round.classList.add("round");
    container.appendChild(round);

    let playerchoice = document.createElement("div");
    playerchoice.classList.add("playerchoice");
    round.appendChild(playerchoice);
    let result = document.createElement("div");
    result.classList.add("result");
    round.appendChild(result);
    let computorchoice = document.createElement("div");
    computorchoice.classList.add("computorchoice");
    round.appendChild(computorchoice);

    //adding computorchoice into divs
    computorchoice.innerText = getComputorChoice();

    //adding playerchoice ROCK
    playerchoice.innerText = "paper";

    //adding result
    result.innerText = papercompare();
    function papercompare(){
        let a = playerchoice.innerText;
        let b = computorchoice.innerText;
        let string = a+b;
        if (string ==="paperpaper") {
            return "Its a Tie! Try again.";
        }
        if (string ==="paperrock") {
            i++;
            playercounter.innerText = i;
            return "You win! Paper beat\’s rock";
        }
        if (string ==="paperscissor") {
            j++;
            computorcounter.innerText = j;
            return "You lose! Scissor beat\’s paper";
        }
    }
    //showing result and disable when reached score of 5
    if(i === 5){
        let result = document.getElementById("result");
        result.innerText = "You Won! " + i + " : " + j;
        disable();
    }
    if(j === 5){
        let result = document.getElementById("result");
        result.innerText = "You Lost! " + i + " : " + j;
        disable();
    }
}


//button scissor execute play
let buttonscissor = document.getElementById("scissor");
buttonscissor.addEventListener("click", scissorround);

function scissorround(){
    //adding divs for showing decisions
    let container = document.getElementById("container");
    let round = document.createElement("div");
    round.classList.add("round");
    container.appendChild(round);

    let playerchoice = document.createElement("div");
    playerchoice.classList.add("playerchoice");
    round.appendChild(playerchoice);
    let result = document.createElement("div");
    result.classList.add("result");
    round.appendChild(result);
    let computorchoice = document.createElement("div");
    computorchoice.classList.add("computorchoice");
    round.appendChild(computorchoice);

    //adding computorchoice into divs
    computorchoice.innerText = getComputorChoice();

    //adding playerchoice ROCK
    playerchoice.innerText = "scissor";

    //adding result
    result.innerText = scissorcompare();
    function scissorcompare(){
        let a = playerchoice.innerText;
        let b = computorchoice.innerText;
        let string = a+b;
        if (string ==="scissorscissor") {
            return "Its a Tie! Try again.";
        }
        if (string ==="scissorpaper") {
            i++;
            playercounter.innerText = i;
            return "You win! Scissor beat\’s paper";
        }
        if (string ==="scissorrock") {
            j++;
            computorcounter.innerText = j;
            return "You lose! Rock beat\’s scissor";
        }
    }
    //showing result and disable when reached score of 5
    if(i === 5){
        let result = document.getElementById("result");
        result.innerText = "You Won! " + i + " : " + j;
        disable();
    }
    if(j === 5){
        let result = document.getElementById("result");
        result.innerText = "You Lost! " + i + " : " + j;
        disable();
    }
}



//adding reset button
const resetbutton = document.getElementById("reset");
resetbutton.addEventListener('click', reset);
function reset(){
    container.replaceChildren();
    result.replaceChildren();
    playercounter.replaceChildren();
    computorcounter.replaceChildren();
    i=0;
    j=0;
    buttonrock.disabled = false;
    buttonpaper.disabled = false;
    buttonscissor.disabled = false;
}
