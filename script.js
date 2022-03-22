const monthDate = document.getElementById("month");
const dayDate = document.getElementById("day");
const hourDate = document.getElementById("hour");
const minuteDate = document.getElementById("minute");
const secondDate = document.getElementById("second");

function calculate() {
  let now = new Date();
  let month = now.getMonth();
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let monthForXMAS = 12 - (month + 2);
  let dayForXMAS = 31 - (day + 1);
  let hourForXMAS = 24 - (hour + 1);
  let minuteForXMAS = 60 - (minute + 1);
  let secondForXMAS = 60 - second;

  monthDate.innerHTML = monthForXMAS;
  dayDate.innerHTML = dayForXMAS;
  hourDate.innerHTML = hourForXMAS;
  minuteDate.innerHTML = minuteForXMAS;
  secondDate.innerHTML = secondForXMAS;
  
}

calculate();
setInterval(calculate, 1000); // her saniye çalıştırır
