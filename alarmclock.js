

let alarmTimeout;
let audio;

function playAlarm() {
    audio = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
    audio.loop = true; // Loop the audio until stopped
    audio.play();
}

function stopAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout); // Clear the timeout
        document.getElementById('alarm').innerText = ""; // Clear the alarm message
        document.getElementById('alarmgive').value = ""; // Clear the alarm hour input
        document.getElementById('alarmput').value = ""; // Clear the alarm minute input
        document.getElementById('alarmInput').value = ""; // Clear the alarm second input
        if (audio) {
            audio.pause(); // Pause the audio
            audio.currentTime = 0; // Rewind the audio to the beginning
        }
    }
}

function displayTime() {
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById('time').innerText = currentTime;
}

function setAlarm() {
    let alarmgive = document.getElementById('alarmgive');
    let hour = parseInt(alarmgive.value);

    if (isNaN(hour) || hour < 0) {
        alert("Please enter a valid number of hours.");
        return;
    }

    let alarmput = document.getElementById('alarmput');
    let minute = parseInt(alarmput.value);

    if (isNaN(minute) || minute < 0 || minute >= 60) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    let alarmInput = document.getElementById('alarmInput');
    let seconds = parseInt(alarmInput.value);

    if (isNaN(seconds) || seconds < 0 || seconds >= 60) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    if (seconds == 0 && minute == 0 && hour == 0) {
        alert("Please enter a valid time.");
        return;
    }

    alarmTimeout = setTimeout(() => {
        playAlarm();
        document.getElementById('alarm').innerText = "Alarm ringing!";
    }, ((hour * 3600) + (minute * 60) + seconds) * 1000);
}

// Update time every second
setInterval(displayTime, 1000);

