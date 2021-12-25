'use strict';
//Selecting elements
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHod = document.querySelector(`.btn--hold`);
let currentScore = 0;

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


//Rolling dice funtionality

btnRoll.addEventListener('click', function () {
	//Generating  a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1;
	//Display dice
	diceEl.classList.remove(`hidden`);
	diceEl.src = `dice-${dice}.png`;
	//check for rolled 1 ; if true switch to next player 

	if (dice !== 1) {
		//Add dice to current player
		currentScore += dice;
		current0El.textContent = currentScore; //Change Later

	}
	else {
		//Switch to next player

	}
})