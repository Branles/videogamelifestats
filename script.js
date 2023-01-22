const inputMission = document.getElementById("input-mission");
const submitMission = document.getElementById("submit-mission");
const missionOutput = document.getElementById("mission-output");

submitMission.addEventListener("click", function(e) {
  e.preventDefault();
  if (inputMission.value === "") {
    missionOutput.innerHTML = "Please enter a mission";
  } else {
    missionOutput.innerHTML = `You have been sent on a mission to: ${inputMission.value}`;
  }
});
