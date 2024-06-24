function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    const interval = setInterval(() => {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = `<span class="hours">${hours}</span>:<span class="minutes">${minutes}</span>:<span class="seconds">${seconds}</span>`;

        if (--timer < 0) {
            clearInterval(interval); // Stops the timer
        }
    }, 1000);
}

window.onload = () => {
    const duration1 = 60 * 60; // 1 hour in seconds for timer 1
    const duration2 = 60 * 60; // 1 hour in seconds for timer 2

    const display1 = document.querySelector('.timer1');
    const display2 = document.querySelector('.timer2');

    startTimer(duration1, display1);
    startTimer(duration2, display2);
};
