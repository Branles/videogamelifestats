const rollDiceButton = document.getElementById("roll-dice");
const diceResult = document.getElementById("dice-result");
const moneyEarned = document.getElementById("money-earned");
const playerName = document.getElementById("player-name");
const playerMoney = document.getElementById("player-money");

let totalMoney = 0;

rollDiceButton.addEventListener("click", function() {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceResult.innerHTML = `You rolled a ${roll}`;
  totalMoney += roll;
  moneyEarned.innerHTML = `You earned ${roll} fictional money!`;
  playerMoney.innerHTML = `Total money: ${totalMoney}`;
});
