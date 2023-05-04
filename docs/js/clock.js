function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Store the time in local storage
    localStorage.setItem('time', JSON.stringify({ hours, minutes, seconds }));

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Retrieve the time from local storage, if available
const storedTime = localStorage.getItem('time');
if (storedTime) {
    const { hours, minutes, seconds } = JSON.parse(storedTime);
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateClock, 1000);