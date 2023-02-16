//display one of 3 variables (rock, paper, scissor)
function getComputorChoice() {
    const cchoice = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * cchoice.length);
    return cchoice[random];
}

