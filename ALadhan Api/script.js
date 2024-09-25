const date = new Date();
const formattedDate = `${String(date.getDate()).padStart(2, "0")}`;
function updateDateTime() {
  const now = new Date(); // Get the current date and time
  const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: false
  };
  const dateTimeString = now.toLocaleString('en-US', options);
  const timeDiv = document.querySelector('.time');
  timeDiv.innerHTML = dateTimeString;
}
updateDateTime();

setInterval(updateDateTime, 1000);

window.onload= city()
function city() {
  let cityLocation = document.getElementById("city").value || "Amman";
  axios
    .get(
      `https://api.aladhan.com/v1/calendarByCity?city=${cityLocation}&country=JO`
    )
    .then((response) => {
      let timings = response.data.data[formattedDate - 1].timings;
      salate(
        timings.Fajr,
        timings.Sunrise,
        timings.Dhuhr,
        timings.Asr,
        timings.Sunset,
        timings.Isha
      );
    });
}

function salate(fajr, shrouk, dhuhr, asr, majreb, isha) {
  document.getElementById("fajr").innerHTML = fajr.split(" ")[0];
  document.getElementById("sunrise").innerHTML = shrouk.split(" ")[0];
  document.getElementById("dhuhr").innerHTML = dhuhr.split(" ")[0];
  document.getElementById("asr").innerHTML = asr.split(" ")[0];
  document.getElementById("sunset").innerHTML = majreb.split(" ")[0];
  document.getElementById("isha").innerHTML = isha.split(" ")[0];
}
