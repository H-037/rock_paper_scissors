//display one of 3 variables (rock, paper, scissor)
function getComputorChoice() {
    const cchoice = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * cchoice.length);
    return random, cchoice[random];
}

//display one of 3 by by player selected variables
function playerSelection() {
    let pchoice = prompt("Rock, Paper or Scissor?"); //ask for choice
    let result = pchoice.toLowerCase(); //make Lowercase
    return result;
}

//compare string with rules and make output
function rules() {
    let a = playerSelection();
    let b = getComputorChoice();
    let string = a+b;
    if (string ==="paperpaper" || string ==="rockrock" || string ==="scissorscissor") {
        return "Its a Tie! Try again.";
    }
    if (string ==="rockscissor") {
        return "You win! Rock beat\’s scissor";
    }
    if (string ==="paperrock") {
        return "You win! Paper beat\’s rock";
    }
    if (string ==="scissorpaper") {
        return "You win! Scissor beat\’s paper";
    }
    if (string ==="scissorrock") {
        return "You lose! Rock beat\’s scissor";
    }
    if (string ==="rockpaper") {
        return "You lose! Paper beat\’s rock";
    }
    if (string ==="paperscissor") {
        return "You lose! Scissor beat\’s paper";
    }
}
console.log(rules());