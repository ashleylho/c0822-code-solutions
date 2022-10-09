console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    player: 'Tinky-Winky',
    hand: []
  },
  {
    player: 'Dipsy',
    hand: []
  },
  {
    player: 'Laa-Laa',
    hand: []
  },
  {
    player: 'Po',
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
    var scores = [];
    for (var j = 0; j < players[i].hand.length; j++) {
      var rank = players[i].hand[j].rank;
      if (players[i].hand[j].rank === 'King' || players[i].hand[j].rank === 'Queen' || players[i].hand[j].rank === 'Jack') {
        rank = 10;
      } else if (players[i].hand[j].rank === 'Ace') {
        rank = 11;
      }
      scores.push(rank);
    }
    sum = scores[0] + scores[1];
    players[i].sum = sum;
    totals.push(sum);
  }
  var winnerScore = Math.max(...totals);
  var index = totals.indexOf(winnerScore);
  console.log('WINNER:', players[index].player);
}

winner(players);
