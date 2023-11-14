let startSound = document.getElementById('startSound');
let endSound = document.getElementById('endSound');

function startCountdown() {
    const targetDate = new Date(document.getElementById('datetime').value).getTime();

    // Play the start sound when the countdown starts
    startSound.play();

    const interval = setInterval(function () {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (timeRemaining < 0) {
            clearInterval(interval);
            document.getElementById('timer').innerHTML = "Time's up!";
            
            // Play the end sound when the countdown reaches zero
            endSound.play();
        }
    }, 1000);
}
