

let balance = 1000;
 

const symbols = ["🍒", "🎰", "🤍", "⭐", "💕"];
 
const maxButton = document.querySelector('#maxBet');
const minButton = document.querySelector('#minBet');
const moneyDisplay = document.querySelector('#moneyDisplay');
const message = document.querySelector('#message');
 

const reels = document.querySelectorAll('.reel');
 
moneyDisplay.innerText = "Balance: $" + balance;
 

function pickSymbol() {

    return symbols[Math.floor(Math.random() * symbols.length)];
}
 
function spin(bet) {
    if (bet > balance) {
        message.innerText = "Not enough money left!";
    } else {
    
        balance -= bet;

        let reelOne = pickSymbol();
        let reelTwo = pickSymbol();
        let reelThree = pickSymbol();
 
        reels[0].innerText = reelOne;
        reels[1].innerText = reelTwo;
        reels[2].innerText = reelThree;
 
        if (reelOne === reelTwo && reelTwo === reelThree) {

            let winnings = bet * 10;
            balance += winnings;
            message.innerText = "Winner! You won $" + winnings;
        } else {
            message.innerText = "You lost.";
        }
 
        moneyDisplay.innerText = "Balance: $" + balance;
    }
}
 

maxButton.addEventListener('click', function() {
    spin(50);
});
 
minButton.addEventListener('click', function() {
    spin(1);
});