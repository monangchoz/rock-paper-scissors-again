
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = 0;
    num = Math.floor(Math.random() *3);

    if (num == 0){
        console.log("Computer Choose Rock")
    }   else if (num == 1){
        console.log("Computer Choose Paper")
    }   else{
        console.log("Computer Choose Scissors")
    }

    return num;
}

function getHumanChoice(){
    let choice = prompt("Choose Rock, Paper, or Scissors.");
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice,computerChoice){
    let output = ("")
    if (humanChoice == "rock" && computerChoice == 0 ||humanChoice == "paper" && computerChoice == 1 ||humanChoice == "scissors" && computerChoice == 2){
        return output = ("DRAW")
    }   else if (humanChoice == "rock" && computerChoice == 2 || humanChoice == "paper" && computerChoice == 0 || humanChoice == "scissors" && computerChoice == 1){
        return output = ("You WIN")
    }   else {
        return output = ("You LOSE")
    }
}

//console.log(getComputerChoice());
//console.log(getHumanChoice())

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(humanChoice)
console.log(computerChoice)
console.log(playRound(humanChoice,computerChoice))



//num = getComputerChoice();
//console.log(num)