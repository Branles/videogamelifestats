const inputMission = document.getElementById("input-mission");
const submitMission = document.getElementById("submit-mission");
const missionOutput = document.getElementById("mission-output");
const completedMissions = document.getElementById("completed-missions");

submitMission.addEventListener("click", function(e) {
  e.preventDefault();
  if (inputMission.value === "") {
    missionOutput.innerHTML = "Please enter a mission";
  } else {
    missionOutput.innerHTML = `You have been sent on a mission to: ${inputMission.value}`;
    // set a timeout to mark the mission as completed after 1 minute
    setTimeout(function() {
      missionOutput.innerHTML = "Mission completed!";
      // create a new list item with the completed mission
      const newMission = document.createElement("li");
      newMission.innerHTML = inputMission.value;
      completedMissions.appendChild(newMission);
    }, 60000);
  }
});
