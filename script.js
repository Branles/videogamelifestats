const rollDiceButton = document.getElementById("roll-dice");
const diceResult = document.getElementById("dice-result");
const moneyEarned = document.getElementById("money-earned");

rollDiceButton.addEventListener("click", function() {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceResult.innerHTML = roll;
  moneyEarned.innerHTML = `You earned ${roll} fictional money!`;
});
