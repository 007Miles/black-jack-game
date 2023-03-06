let cards = [];
let sum = 0;
// console.log(sum);
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let errorEl = document.getElementById("error-el");

let player = {
  name: "Miles",
  chips: 145,
};

let chipSum = player.chips;

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNum = Math.ceil(Math.random() * 13);
  if (randomNum === 1) {
    console.log("Card is Ace: " + randomNum);
    return 11;
  } else if (randomNum === 11 || randomNum === 12 || randomNum === 13) {
    console.log("Card is J or Q or K: " + randomNum);
    return 10;
  } else {
    console.log("Card is between 2 - 10: " + randomNum);
    return randomNum;
  }
}

function startGame() {
  errorEl.textContent = "";
  if (chipSum <= 0) {
    gameOver();
  } else {
    isAlive = true;
    let firstcard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstcard, secondCard];
    sum = firstcard + secondCard;
    renderGame();
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    sumEl.textContent = "Sum: " + sum;
  }
}

function renderGame() {
  console.log("buttton clicked");
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    chipSum = chipSum + 50;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    chipSum = chipSum - 5;
  }
  console.log("hasBlackJack: " + hasBlackJack);
  console.log("isAlive: " + isAlive);
  console.log(message);
  messageEl.textContent = message;
  playerEl.textContent = player.name + ": $" + chipSum;
}

//🙂🥳😭

function newCard() {
  if (isAlive == false) {
    errorEl.textContent = "Click the Start game button to play";
  } else if (hasBlackJack == true) {
    errorEl.textContent = "Congrats you won... Start a new game";
    hasBlackJack = false;
  } else if (chipSum <= 0) {
    errorEl.textContent = "Your purse is $0... Come back later";
  } else if (isAlive === true && hasBlackJack === false && chipSum > 0) {
    errorEl.textContent = "";
    console.log("Drawing new card");
    let card = getRandomCard();
    cards.push(card);
    sum = sum + card;
    renderGame();
  }
}

function gameOver() {
  errorEl.textContent = "Your purse is $0... Come back later";
  isAlive = false;
}

// let messages = ["How are you", "Im fine", "Love ya", "Toodles"];
// messages.push("Im okay");
// messages.push("🥳");

// for (let i = 0; i < messages.length; i++) {
//   console.log(messages[i]);
// }

// let sentence = ["Hello", "my", "name", "is", "Miles"];

// for (let i = 0; i < sentence.length; i++) {
//   messageEl.textContent += " " + sentence[i];
// }

// let player1Time = 102;
// let player2Time = 107;

// function total() {
//   return player1Time + player2Time;
// }

// let raceTime = total();
// console.log(raceTime);

//console["log"]("Miles");        //........Bracket notation for objects

// let castle = {
//   available: true,
//   name: "Grifindor",
//   feet: 50,
//   colors: ["grey", "red", "blue"],
// };

// console.log(castle.colors[0]);
// console.log(castle.name);
// console.log(castle);
