//make h1
const container = document.querySelector('#container');
const content = document.createElement('h1');
content.classList.add('content');
content.textContent = 'Rock Paper Scissor';
container.appendChild(content);

//display one of 3 variables (rock, paper, scissor)
function getComputorChoice() {
    const cchoice = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * cchoice.length);
    return random, cchoice[random];
}

//playing game with playerchoice = rock
function prock() {
    let a = "rock";
    let b = getComputorChoice();
    let string = a+b;
    if (string ==="rockrock") {
        return "Its a Tie! Try again.";
    }
    if (string ==="rockscissor") {
        return "You win! Rock beat\’s scissor";
    }
    if (string ==="rockpaper") {
        return "You lose! Paper beat\’s rock";
    }
}

//playing game with playerchoice = paper
function ppaper() {
    let a = "paper";
    let b = getComputorChoice();
    let string = a+b;
    if (string ==="paperpaper") {
        return "Its a Tie! Try again.";
    }
    if (string ==="paperrock") {
        return "You win! Paper beat\’s rock";
    }
    if (string ==="paperscissor") {
        return "You lose! Scissor beat\’s paper";
    }
}

//playing game with playerchoice = scissor
function pscissor() {
    let a = "scissor";
    let b = getComputorChoice();
    let string = a+b;
    if (string ==="scissorscissor") {
        return "Its a Tie! Try again.";
    }
    if (string ==="scissorpaper") {
        return "You win! Scissor beat\’s paper";
    }
    if (string ==="scissorrock") {
        return "You lose! Rock beat\’s scissor";
    }
}

//showing Result for pchoice rock
const showRock = document.getElementById('rock')
showRock.addEventListener('click', srock);
function srock(){
    const result = document.createElement('div');
    result.textContent = prock();
    container.appendChild(result);
}

//showing Result for pchoice paper
const showPaper = document.getElementById('paper')
showPaper.addEventListener('click', spaper);
function spaper(){
    const result = document.createElement('div');
    result.textContent = ppaper();
    container.appendChild(result);
}

//showing Result for pchoice scissor
const showScissor = document.getElementById('scissor')
showScissor.addEventListener('click', sscissor);
function sscissor(){
    const result = document.createElement('div');
    result.textContent = pscissor();
    container.appendChild(result);
}