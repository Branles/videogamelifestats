
  // JavaScript code goes here
  var divElements = document.getElementById("colorChangeDivs");

  divElements.addEventListener("click", function() {
    var randomColor = getRandomColor();
    divElements.style.backgroundColor = randomColor;
  });

  // JavaScript code goes here
  var divElementc = document.getElementById("colorChangeDivc");

  divElementc.addEventListener("click", function() {
    var randomColor = getRandomColor();
    divElementc.style.backgroundColor = randomColor;
  });

  // JavaScript code goes here
  var divElementt = document.getElementById("colorChangeDivt");

  divElementt.addEventListener("click", function() {
    var randomColor = getRandomColor();
    divElementt.style.borderBottomColor = randomColor;
  });

  // JavaScript code goes here
  var divElementr = document.getElementById("colorChangeDivr");

  divElementr.addEventListener("click", function() {
    var randomColor = getRandomColor();
    divElementr.style.backgroundColor = randomColor;
  });

  var starElement = document.getElementById("colorChangeDivst");

  starElement.addEventListener("click", function() {
    var randomColor = getRandomColor();
    starElement.querySelector("polygon").setAttribute("fill", randomColor);
  });

  var pentagonElement = document.getElementById("colorChangeDivpg");

  pentagonElement.addEventListener("click", function() {
    var randomColor = getRandomColor();
    pentagonElement.querySelector("polygon").setAttribute("fill", randomColor);
  });

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
