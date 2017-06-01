const suits = ['hearts', 'clubs', 'spades', 'diamonds']
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const rankScores = { ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13 }


class Card {
  constructor( rank, suit ) {
    this.suit = suit
    this.rank = rank
    this.score = rankScores[ rank ]
    this.title = `${rank} of ${suit}`
  }
}

let queenOfHearts = new Card('queen', 'hearts')
console.log( queenOfHearts )


class Deck {

  constructor(  ) {
    this.cards = []
  }

  createNewDeck() {

    for ( let i = 0; i < suits.length; i++ ) {
      for ( let j = 0; j < ranks.length; j++ ) {
        this.cards.push( new Card( ranks[j], suits[i] ) )
      }
    }

  }

  dealHand() {
    // return an array of random cards
  }

}
// removing a card from the random deck array after 'dealt'

let testDeck = new Deck()
testDeck.createNewDeck()
playerOne.hand = testDeck.dealHand()

console.log( testDeck )

class RandomDeck{
  constructor(){
    this.randomCards = []
  }

  createRandomDeck(){
    for(let m = 0; m < deck.length; m++){
      let randomIndex = Math.floor(Math.random() * deck.length)
      this.randomDeck.push()
    }
  }
}

let randomDeck = new RandomDeck()
randomDeck.createRandomDeck()




function createDeck( suits, ranks ) {
  // declare the array we weill eventually return
  const finalDeck = []

  // first, loop through the suits
  for (let i = 0; i < suits.length; i++) {

    // second, loop through the ranks
    for (let j = 0; j < ranks.length; j++) {
      // create a string representing a card and push it into
      // our final array
      // i.e. 'ace of hearts'
      finalDeck.push( ranks[j] + ' of ' + suits[i] )
    }

  }
  return finalDeck
}

const deckOfCards = createDeck( suits, ranks )
this.randomDeck = []
function getRandomDeck(deck,numberofCards){
  let randomIndex = Math.floor(Math.random() * deck.length)
  for(let m = 0; m < numberofCards; m++){
    this.randomDeck.push()
  }
}

getRandomDeck(deckOfCards, 26)
