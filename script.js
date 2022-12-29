<script>
// Add a "back to top" button when the user scrolls down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add a dropdown menu for the navigation
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
</script>
<style>
// Style the "back to top" button
#topBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #00008B;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#topBtn:hover {
  background-color: #0000FF;
}

// Style the dropdown menu
.dropdown-btn {
  cursor: pointer;
  color: #00008B;
}

.dropdown-container {
  display: none;
  background-color: #F0F8FF;
  padding: 10px;
}

.active {
  color: #0000FF;
}
</style>
<!-- Add the dropdown menu to the navigation -->
<nav>
	<ul>
		<li class="dropdown-btn">Introduction <i class="down"></i></li>
		<div class="dropdown-container">
			<a href="#intro">Introduction</a>
		</div>
		<li class="dropdown-btn">Classification <i class="down"></i></li>
		<div class="dropdown-container">
			<a href="#classification">Classification</a>
		</div>
		<li class="dropdown-btn">Formation <i class="down"></i></li>
		<div class="dropdown-container">
			<a href="#formation">Formation</a>
		</div>
		<li class="dropdown-btn">Lifecycle <i class="down"></
