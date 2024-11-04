let prayersTimes = {};
const adan = new Audio('/a4.mp3');



function updateClock() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    weekday: 'long',
    day: 'numeric',

};

document.getElementById('date').textContent = now.toLocaleDateString('nl-EG', options);

const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0'); ;
const seconds = String(now.getSeconds()).padStart(2, '0'); ;
document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

if (Object.keys(prayersTimes).length > 0) {
  const currentTime = `${hours}:${minutes}`;
 if(Object.values(prayersTimes).includes(currentTime)) {
   adan.play();
 }

}
}

async function fetchPrayerTimes() {
const response = await fetch('adhan.php'); 
prayersTimes = await response.json();


document.getElementById('fajr-time').textContent = prayersTimes.fajr;
document.getElementById('dhuhr-time').textContent = prayersTimes.dhuhr;
document.getElementById('asr-time').textContent = prayersTimes.asr;
document.getElementById('maghrib-time').textContent = prayersTimes.maghrib;
document.getElementById('isha-time').textContent = prayersTimes.isha;

}
setInterval(updateClock, 1000);
fetchPrayerTimes();

var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);