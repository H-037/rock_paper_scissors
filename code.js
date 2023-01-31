//display one of 3 variables (rock, paper, scissor)
function getComputorChoice () {
    const choice = ["Rock", "Paper", "Scissor"]
    const random = Math.floor(Math.random() * choice.length);
    console.log(random, choice[random]);
}

console.log(getComputorChoice());