var isim = prompt("Adınız nedir?");
document.querySelector('#myName').innerHTML=isim;

function getCurrentTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.toLocaleDateString('tr-TR', { weekday: 'long' });

    var timeString = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds) + ' ' + day;
    return timeString;
  }

  function formatTime(time) { //10dan kucukse basina 0 ekle
    return time < 10 ? '0' + time : time;
  }

  function updateClock() {
    var clock = document.getElementById("myClock");
    clock.textContent = getCurrentTime();
  }

  // Saati her saniyede bir güncelleyelim
  setInterval(updateClock, 1000);