// cache the dom (storing for future use)
// & reset everything to 0 value
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const Lady_div = document.getElementById('Lady');
const Hunter_div = document.getElementById('Hunter');
const Tiger_div = document.getElementById('Tiger');


// set up the core function for the computer that will use math.random to loop through an array and return that value
function getComputerChoice() {
  const choices = ['Lady', 'Hunter', 'Tiger'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// similar to convertcase but just takes lowercase and replaces with titlecase
function convertCase(anythingIwant) {
  if (anythingIwant === 'Lady') return 'Lady';
  if (anythingIwant === 'Hunter') return 'Hunter';
  return 'Tiger';
}

// Winning Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function win(user, computer) {
  userScore++;
  // console.log('user score is ' + userScore + ' ' + user);
  userScore_span.innerHTML = userScore;
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${compName}. You win!🔥🔥</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('winningStyles');
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

// Losing Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function loses(user, computer) {
  computerScore++;
  // console.log('computer score is ' + computerScore + ' ' + computer);
  computerScore_span.innerHTML = computerScore;
  const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. You lose!👎🏻👎🏻</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('losingStyles');
  setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}

// Draw Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function draw(user, computer) {
	const userName = ' (user)'.fontsize(3).sup();
  const compName = ' (comp)'.fontsize(3).sup();
  result_div.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;
  // "It was a draw! You both chose " + user + " " + computer; // old js
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('drawStyles');
  setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}

// The core game functions that set up and determine the games actual logic aka paper beats rock etc
function game(userChoice) {
  const computerChoice = getComputerChoice();
  // console.log('Game function: user choice is = ' + userChoice);
  // console.log('Game function: computer choice is = ' + computerChoice);

  switch (userChoice + computerChoice) {
    case 'LadyHunter':
    case 'HunterTiger':
    case 'TigerLady':
      win(userChoice, computerChoice);
      // console.log("user wins");
      break;
    case 'HunterLady':
    case 'TigerHunter':
    case 'LadyTiger':
      loses(userChoice, computerChoice);
      // console.log("computer wins");
      break;
    case 'LadyLady':
    case 'HunterHunter':
    case 'TigerTiger':
      draw(userChoice, computerChoice);
      // console.log("draw");
      break;
  }
}
// ES5 style of writing this function
// function main() {
//   Lady_div.addEventListener('click', function() {
//     game('Lady');
//   });

//   Hunter_div.addEventListener('click', function() {
//     game('Hunter');
//   });

//   Tiger_div.addEventListener('click', function() {
//     game('Tiger');
//   });
// }

// ES6 style of writing this function
// This function creates and adds an eventlistener to the rock, paper scissors html element and the passes the value of that element to the game function
function main() {
  Lady_div.addEventListener('click', () => game('Lady'));
  Hunter_div.addEventListener('click', () => game('Hunter'));
  Tiger_div.addEventListener('click', () => game('Tiger'));
}

main();