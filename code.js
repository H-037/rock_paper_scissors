// overall container //

//display one of 3 variables (rock, paper, scissor)
function getComputorChoice() {
    const cchoice = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * cchoice.length);
    console.log(random, cchoice[random]);
}

//display one of 3 by by player selected variables
function playerSelection() {
    let pchoice = prompt("Rock, Paper or Scissor?"); //ask for choice
    let result = pchoice.toLowerCase(); //make Lowercase
    console.log(result);
}

function game() {   //add both functions together
    let sum = result + cchoice;
    console.log(sum);
}

console.log(getComputorChoice(), playerSelection(), game());
//add rules
// return who wins and why