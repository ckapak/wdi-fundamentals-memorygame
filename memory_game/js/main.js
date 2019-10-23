console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];
var gameBoard = document.getElementById('game-board');

var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		console.log(cards[i]);
	
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png')
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipcard); 

		gameBoard.appendChild(cardElement);

	}

}

var flipcard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {

		checkForMatch();
	}

}

var checkForMatch = function() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
  		alert("You found a match!");

	} else {
		alert("Sorry, try again.");
	}

}

createBoard()