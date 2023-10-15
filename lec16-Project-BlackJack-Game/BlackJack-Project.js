const generateDeck = () => {
  const suits = ["Hearts", "Club", "Diamonds", "Spades"];
  const cards = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];
  const Deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      Deck.push({ card: cards[j], suit: suits[i] });
    }
  }

  return Deck;
};
const deck = generateDeck();

const drawCard = (deck) => {
  const i = Math.floor(Math.random() * deck.length);
  const card = deck[i];
  deck.splice(i, 1);

  return card;
};
const checkScore = (hand) => {
  let score = 0;

  for (let i = 0; i < hand.length; i++) {
    if (
      hand[i].card === "Jack" ||
      hand[i].card === "Queen" ||
      hand[i].card === "King"
    ) {
      score += 10;
    } else if (hand[i].card === "Ace") {
      score += 1;
    } else {
      score += Number(hand[i].card);
    }
  }
  return score;
};

const card = drawCard(deck);

const dealerHand = [];
const playerHand = [];

playerHand.push(drawCard(deck));
dealerHand.push(drawCard(deck));

playerHand.push(drawCard(deck));
dealerHand.push(drawCard(deck));

console.log("Starting player Hand: ", playerHand);
console.log("Starting Player Score: ", checkScore(playerHand));
console.log("Starting Dealer Hand: ", dealerHand);
console.log("Starting Dealer Score", checkScore(dealerHand));

while (true) {
  // deal the player card

  //check if player burst over 21
  //check if player hit 21

  playerHand.push(drawCard(deck));
  const playerScore = checkScore(playerHand);
  dealerHand.push(drawCard(deck));
  const dealerScore = checkScore(dealerHand);
  if (playerScore > 21) {
    console.log(
      "You loose! Your final score was: ",
      playerScore,
      `while the dealer had ${dealerScore}`
    );
    break;
  }

  if (playerScore === 21) {
    console.log(
      `You win! Your final score was ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }

  if (dealerScore > 21) {
    console.log(
      `You win! Your final score was: ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }

  if (dealerScore === 21) {
    console.log(
      `You lose! Your final score was: ${playerScore} while the dealer had ${dealerScore}`
    );
    break;
  }
}

console.log("Ending Player Hand: ", playerHand);
console.log("Ending Player Score: ", checkScore(playerHand));
console.log("Ending Dealer Hand: ", dealerHand);
console.log("Ending Dealer Score: ", checkScore(dealerHand));
