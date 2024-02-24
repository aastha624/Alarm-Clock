
function playAlarm() {
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
  }
  
  function displayTime() {
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById('time').innerText = currentTime;
  }
  
  function setAlarm() {
    let alarmgive= document.getElementById('alarmgive');
    let hour = parseInt(alarmgive.value);
  
    if (isNaN(hour) || hour < 0) {
      alert("Please enter a valid number of minute.");
      return;
    }
    let alarmput= document.getElementById('alarmput');
    let minute = parseInt(alarmput.value);
  
    if (isNaN(minute) || minute <0) {
      alert("Please enter a valid number of minute.");
      return;
    }



    let alarmInput = document.getElementById('alarmInput');
    let seconds = parseInt(alarmInput.value);
  
    if (isNaN(seconds) || seconds<0) {
      alert("Please enter a valid number of seconds.");
      return;
    }

    if(seconds == 0 && minute == 0 && hour == 0){
      alert("Please enter a valid number.");
      return;
  }

  
    setTimeout(() => {
      playAlarm();
      document.getElementById('alarm').innerText = "Alarm ringing!";
    }, ((hour*3600)+(minute*60)+ seconds)*1000);

    setTimeout(() => {
     
      document.getElementById('alarm').innerText="";
      
    }, (((hour*60*60)+(minute*60)+ seconds)+5) * 1000);
}
  
//   Update time every second
  setInterval(displayTime, 1000);


