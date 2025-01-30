const timeUpdate = document.getElementById("currentTime");

// Get current date and time
setInterval(updateTime, 1000);
function updateTime() {
  timeUpdate.innerHTML = new Date().toUTCString();
}
updateTime();
