//put all the buttons into variable
const rpsButtons = document.querySelectorAll("[data-selection]")
const p1wins = document.querySelector(".p1_wins")
const p2wins = document.querySelector(".p2_wins")
const versus = document.querySelector(".versus")
const p1WinCount = document.querySelector(".pWinCount1")
const p2WinCount = document.querySelector(".pWinCount2")
// using the playerWinner will determine the winner based on p1, p2, or a 3 for a tie.
let playerWinner = 0
let p1Choice = 0
let p2Choice = ""
let p1Count = 0;
let p2Count = 0;

const CHOICES = [
    {
        id: 1,
        rps: "Rock"
    },
    {
        id: 2,
        rps: "Paper"
    },
    {
        id: 3,
        rps: "Scissors"
    }
]

// Player 2 is going random
function rand() {
    return Math.floor(Math.random() * 3 + 1);
}

//press a button and the winner is chosen or a tie
rpsButtons.forEach(rpsButton => {
    rpsButton.addEventListener('click', evt => {
        const rpsChoice = rpsButton.dataset.selection
        const choice = CHOICES.find(choice => choice.rps === rpsChoice)
        p1Choice = choice
        determineWinnner()
        document.querySelector(".versusHead").textContent = "ROCK! PAPER! SCISSORS! SHOOT!"
        setTimeout(() => {  printWinner() }, 1500)
    })
})

//determine the winner
function determineWinnner() {
    const p1 = p1Choice
    const p2 = rand()
    //rock beats scissors
    if(p1.id === 1 && p2 === 3) {
        playerWinner = 1;
        p2Choice = "Scissors"
        p1Count += 1
    }
    //rock loses to paper
    else if(p1.id === 1 && p2 === 2) {
        playerWinner = 2;
        p2Choice = "Paper"
        p2Count += 1
    }
    //paper beats rock
    else if(p1.id === 2 && p2 === 1) {
        playerWinner = 1;
        p2Choice = "Rock"
        p1Count += 1
    }
    //paper loses to scissors
    else if(p1.id === 2 && p2 === 3) {
        playerWinner = 2;
        p2Choice = "Scissors"
        p2Count += 1
    }
    //scissors beats paper 
    else if(p1.id === 3 && p2 === 2) {
        playerWinner = 1;
        p2Choice = "Paper"
        p1Count += 1
    }
    //scissors loses to rock
    else if(p1.id === 3 && p2 === 1) {
        playerWinner = 2;
        p2Choice = "Rock"
        p2Count += 1
    }
    //tie
    else{
        playerWinner = 3;
    }
}

function printWinner(){
    if(playerWinner === 1) {
        p1wins.textContent = `Player 1 chose ${p1Choice.rps}! Player 1 Wins!`
        p2wins.textContent = `Player 2 chose ${p2Choice}! Player 2 Loses!`
        versus.textContent = `${p1Choice.rps} vs ${p2Choice}`
        p1WinCount.textContent = `Player1 : ${p1Count}`
    }
    else if(playerWinner === 2){
        p1wins.textContent = `Player 1 chose ${p1Choice.rps}! Player 1 Loses!`
        p2wins.textContent = `Player 2 chose ${p2Choice}! Player 2 Wins!`
        versus.textContent = `${p1Choice.rps} vs ${p2Choice}`
        p2WinCount.textContent = `Player2 : ${p2Count}`
    }
    else if(playerWinner === 3){
        p1wins.textContent = `Both Players chose ${p1Choice.rps}! Tie!`
        p2wins.textContent = `Both Players chose ${p1Choice.rps}! Tie!`
        versus.textContent = `${p1Choice.rps} vs ${p1Choice.rps}`
    }
    else{
        p1wins.textContent = "Something went wrong"
        p2wins.textContent = "Check your code"
    }
    document.querySelector(".versusHead").textContent = "GAME OVER! Choose again!"
}