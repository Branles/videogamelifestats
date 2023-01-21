const currentMoney = document.getElementById("current-money");

let totalMoney = 0;

currentMoney.innerHTML = `Current money: ${totalMoney}`;

rollDiceButton.addEventListener("click", function() {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceResult.innerHTML = `You rolled a ${roll}`;
  totalMoney += roll;
  moneyEarned.innerHTML = `You earned ${roll} fictional money!`;
  playerMoney.innerHTML = `Total money: ${totalMoney}`;
  currentMoney.innerHTML = `Current money: ${totalMoney}`;
});
