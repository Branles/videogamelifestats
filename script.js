let completedMissions = JSON.parse(localStorage.getItem("completedMissions")) || [];

const inputMission = document.getElementById("input-mission");
const submitMission = document.getElementById("submit-mission");
const missionOutput = document.getElementById("mission-output");
const completedMissionsList = document.getElementById("completed-missions-list");

submitMission.addEventListener("click", function(e) {
  e.preventDefault();
  if (inputMission.value === "") {
    missionOutput.innerHTML = "Please enter a mission";
  } else {
    missionOutput.innerHTML = `You have been sent on a mission to: ${inputMission.value}. It will be completed in 1 minute.`;
    setTimeout(() => {
      completedMissions.push(inputMission.value);
      localStorage.setItem("completedMissions", JSON.stringify(completedMissions));
      missionOutput.innerHTML = `Mission: ${inputMission.value} has been completed and added to completed missions list`;
      completedMissionsList.innerHTML = "";
      completedMissions.forEach(mission => {
        const li = document.createElement("li");
        li.innerHTML = mission;
        completedMissionsList.appendChild(li);
      });
    }, 60000); 
  }
});
