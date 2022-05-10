let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randonNumber = Math.floor(Math.random() * 3);
    //  console.log(randonNumber);
    return choices[randonNumber]
}

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Scissors";
}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " Beats " + convertToWord(computerChoice) +" you win!"
}

function lose(){
    console.log("Lose!");
}
function draw(){
    console.log("Draw!");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    const name = "Apple";

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sp":
            lose(userChoice,computerChoice)
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,computerChoice)
            break;
    }

}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissor_div.addEventListener('click', function () {
        game("s");
    })
}

main();