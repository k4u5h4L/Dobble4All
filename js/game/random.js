let card1 = [];
let card2 = [];

let c1;
let c2;

// taking a random card in the pile of cards
c1 = Math.floor(Math.random() * 57);
console.log(c1);

// taking a random card in the pile of cards
c2 = Math.floor(Math.random() * 57);

// seeing if both the randoms match each other. if they do, then change
while (c1 == c2) {
    c2 = Math.floor(Math.random() * 57);
}
console.log(c2);

card1 = cards[c1];
card2 = cards[c2];

console.log(card1);
console.log(card2);
