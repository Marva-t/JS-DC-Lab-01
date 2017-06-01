const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, queen: 12, king: 13 }


class Card {
  constructor( rank, suit ) {
    this.suit = suit
    this.rank = rank
    this.score = rankScores[rank]
    this.title = `${rank} of ${suit}`
  }
}
// const newCard = new Card('ace','hearts')
// console.log(newCard)

class Deck {

  constructor(  ) {
    this.cards = []

  }

  createNewDeck() {
    // this.cards = []
    for ( let i = 0; i < suits.length; i++ ) {
      for ( let j = 0; j < ranks.length; j++ ) {
        this.cards.push( new Card( ranks[j], suits[i] ) )
      }
    }
  }

  // shuffle(){
  //   var newDeck =
  //   for(let m = 0; m < deck.length; m++){
  //     let randomIndex = Math.floor(Math.random() * deck.length)
  //     newDeck[randomIndex] = this.cards[m]
  //
  //
  //   }
  // }

}


var deck = new Deck()
deck.createNewDeck()
// console.log(deck)

function shuffleDeck(deck){
    // this.shuffle = []
    // for(let m = 0; m < deck.length; m++){
      let randomIndex = Math.floor(Math.random() * deck.length)
      // newDeck[randomIndex] = this.cards[m]

      return deck[randomIndex]
    // }

}

let test = shuffleDeck(deck)
console.log(test)

function dealHand(deck){
  
}

// var Player = require('./player.js');

//
// var prompt = require('prompt');
// prompt.start();
// prompt.get(['username', 'username2'], function (err, result) {
//
//    console.log('Command-line input received:');
//    console.log('  username one: ' + result.username);
//    console.log('  username two: ' + result.username2);
//    let username = result.username
//    let username2 = result.username2
//    let playerOne = new Player(username)
//    let playerTwo = new Player(username2)
//    console.log(playerOne.username)
//    console.log(playerTwo.username)
//
//
//
//
//  });
