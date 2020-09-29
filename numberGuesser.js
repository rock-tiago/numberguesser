let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

function userNumber(userInput) {
  if(userInput === 0) {
    return userInput
  } else if (userInput === 1) {
    return userInput
  } else if (userInput === 2) {
    return userInput
  } else if (userInput === 3) {
    return userInput
  } else if (userInput === 4) {
    return userInput
  } else if (userInput === 5) {
    return userInput
  } else if (userInput === 6) {
    return userInput
  } else if (userInput === 7) {
    return userInput
  } else if (userInput === 8) {
    return userInput
  } else if (userInput === 9) {
    return userInput
  } else {
    document.getElementById("errorMessage").innerHTML= "Error. Please choose a number between 0 and 9.";
  }
}

/*
function determineWinner(userChoice, pcChoice, targetNumber) {
  let userFinalNumber = targetNumber - userChoice;
  let computerFinalNumber = targetNumber - pcChoice;
  if(userFinalNumber < computerFinalNumber && userFinalNumber < 0) {
    if(userFinalNumber + computerFinalNumber === 0) {
      return "It's a tie!";
    } else if (userFinalNumber + computerFinalNumber < 0) {
      return "Computer Wins!";
    } else if (userFinalNumber + computerFinalNumber > 0) {
      return "You Win!";
    }
  } else if(computerFinalNumber > userFinalNumber && userFinalNumber >= 0 && computerFinalNumber>0) {
    return "You Win!";
  } else if(computerFinalNumber < userFinalNumber && userFinalNumber >0 && computerFinalNumber >=0) {
    return "Computer Wins!";
  } else if(userFinalNumber > computerFinalNumber && computerFinalNumber < 0) {
    if(computerFinalNumber + userFinalNumber < 0) {
      return "You Win!";
    } else if (computerFinalNumber + userFinalNumber > 0) {
      return "Computer Wins!";
    } else if (computerFinalNumber + userFinalNumber === 0) {
      return "It's a tie!";
    }
  } else if (userFinalNumber === computerFinalNumber) {
    return "It's a tie!";
  }
} */
/*
let computerChoice = generateComputerNumber();
let targetNumberChoice = generateTargetNumber();
 console.log("Target number is: " + targetNumberChoice);
console.log("Computer chose: " + computerChoice);
console.log(determineWinner(humanChoice, computerChoice, targetNumberChoice));
addScore(humanChoice);
console.log("Current Human Score: " + humanScore);
console.log("Current Computer Score: " + computerScore); */
let humanScore1 = 0;
let pcScore1 = 0;

function checkWinner() {
  const computerChoice = Math.floor(Math.random()*10);
  let userChoice = parseInt(document.getElementById('Human-choice').value);
  const targetNumberChoice = Math.floor(Math.random()*10);
  document.getElementById('computer-choice').innerHTML = computerChoice;
  document.getElementById('target-number').innerHTML = targetNumberChoice;
  let targetNumber = targetNumberChoice;
  let userFinalNumber = targetNumber - userChoice;
  let computerFinalNumber = targetNumber - computerChoice;
  if(userChoice > 9 || userChoice < 0) {
    document.getElementById('output').innerHTML = "Error. Please select a number between 0 and 9.";
  } else if(userFinalNumber < computerFinalNumber && userFinalNumber < 0) {
    if(userFinalNumber + computerFinalNumber === 0) {
      document.getElementById('output').innerHTML = "It's a tie!";
    } else if (userFinalNumber + computerFinalNumber < 0) {
      document.getElementById('output').innerHTML = "Computer Wins!"
      pcScore1 += 1;
    } else if (userFinalNumber + computerFinalNumber > 0) {
      document.getElementById('output').innerHTML = "You Win!"
      humanScore1 += 1;
    }
  } else if(computerFinalNumber > userFinalNumber && userFinalNumber >= 0 && computerFinalNumber>0) {
    document.getElementById("output").innerHTML = "You Win!"
    humanScore1 += 1;
  } else if(computerFinalNumber < userFinalNumber && userFinalNumber >0 && computerFinalNumber >=0) {
    document.getElementById('output').innerHTML = "Computer Wins!"
    pcScore1 += 1;
  } else if(userFinalNumber > computerFinalNumber && computerFinalNumber < 0) {
    if(computerFinalNumber + userFinalNumber < 0) {
      document.getElementById('output').innerHTML = "You Win!"
      humanScore1 += 1;
    } else if (computerFinalNumber + userFinalNumber > 0) {
      document.getElementById('output').innerHTML = "Computer Wins!"
      pcScore1 += 1;
    } else if (computerFinalNumber + userFinalNumber === 0) {
      document.getElementById('output').innerHTML = "It's a tie!";
    }
  } else if (userFinalNumber === computerFinalNumber) {
    document.getElementById('output').innerHTML = "It's a tie!";
  } else {
    document.getElementById('output').innerHTML = "Error. Please select a number between 0 and 9.";
  }
  document.getElementById('computer-score').innerHTML = pcScore1;
  document.getElementById('human-score').innerHTML = humanScore1;
}

