console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    pName: 'Tinky-Winky',
    hand: []
  },
  {
    pName: 'Dipsy',
    hand: []
  },
  {
    pName: 'Laa-Laa',
    hand: []
  },
  {
    pName: 'Po',
    hand: []
  }
];

var deck = [];

function cardDeck() {
  var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var suit = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (var i = 0; i < rank.length; i++) {
    for (var j = 0; j < suit.length; j++) {
      var card = {};
      card.rank = rank[i];
      card.suit = suit[j];
      deck.push(card);
    }
  }
  return deck;
}

cardDeck();

function shuffle(deck) {
  for (var i = 0; i < deck.length; i++) {
    var random = Math.floor(Math.random() * i);
    var temp = deck[i];
    deck[i] = deck[random];
    deck[random] = temp;
  }
  return deck;
}

var shuffled = shuffle(deck);

function deal(deck) {
  for (var i = 0; i < players.length; i++) {
    var cards = [];
    cards.push(deck.pop());
    cards.push(deck.pop());
    players[i].hand = cards;
  }
}

deal(shuffled);

function winner(players) {
  console.log(players);
  var totals = [];
  var sum = 0;
  for (var i = 0; i < players.length; i++) {
    var value0 = players[i].hand[0].rank;
    var value1 = players[i].hand[1].rank;
    if (players[i].hand[0].rank === 'King' || players[i].hand[0].rank === 'Queen' || players[i].hand[0].rank === 'Jack') {
      value0 = 10;
    }
    if (players[i].hand[0].rank === 'Ace') {
      value1 = 11;
    }
    if (players[i].hand[1].rank === 'King' || players[i].hand[1].rank === 'Queen' || players[i].hand[1].rank === 'Jack') {
      value0 = 10;
    }
    if (players[i].hand[1].rank === 'Ace') {
      value1 = 11;
    }
    sum = value0 + value1;
    totals.push(sum);
  }
  console.log(totals);
  var winnerScore = Math.max(...totals);
  var index = totals.indexOf(winnerScore);
  console.log('WINNER:', players[index].pName);
}

winner(players);

// in case of tie,
// new cards need to be assigned to players
//
