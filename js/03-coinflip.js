let coinFlip 
let randomNum = Math.round(Math.random());
coinFlip = randomNum
let choice = prompt("Choose Heads or Tails");

if (coinFlip < 1) { //if result is heads
    if (choice === "Heads") {
        alert("The flip was heads and you chose heads... you win!")
    } else {
        alert("The flip was heads but you chose tails... you lose!")
    }
} else { //if result is tails
    if (choice === "Heads") {
        alert("The flip was tails but you chose heads... you lose!")
    } else {
        alert("The flip was heads but you chose tails... you win!")
    }
}



