let completedMissions = JSON.parse(localStorage.getItem("completedMissions")) || [];
let timer;
let missionInProgress = false;

const inputMission = document.getElementById("input-mission");
const submitMission = document.getElementById("submit-mission");
const missionOutput = document.getElementById("mission-output");
const completedMissionsList = document.getElementById("completed-missions-list");
const timerOutput = document.getElementById("timer-output");

submitMission.addEventListener("click", function(e) {
  e.preventDefault();
  if (inputMission.value === "") {
    missionOutput.innerHTML = "Please enter a mission";
  } else if (missionInProgress) {
    missionOutput.innerHTML = "A mission is already in progress. Please wait until it is completed.";
  } else {
    missionInProgress = true;
    inputMission.setAttribute("disabled", "disabled");
    missionOutput.innerHTML = `You have been sent on a mission to: ${inputMission.value}. It will be completed in 1 minute.`;
    timer = 60;
    timerOutput.innerHTML = timer;
    const countdown = setInterval(() => {
      timer--;
      timerOutput.innerHTML = timer;
      if (timer === 0) {
        clearInterval(countdown);
        missionInProgress = false;
        completedMissions.push(inputMission.value);
        localStorage.setItem("completedMissions", JSON.stringify(completedMissions));
        missionOutput.innerHTML = `Mission: ${inputMission.value} has been completed and added to completed missions list`;
        inputMission.removeAttribute("disabled");
        inputMission.value = "";
        completedMissionsList.innerHTML = "";
        completedMissions.forEach(mission => {
          const li = document.createElement("li");
          li.innerHTML = mission;
          completedMissionsList.appendChild(li);
        });
      }
    }, 1000);
  }
});
