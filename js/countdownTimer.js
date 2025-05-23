const countDownTimer = () => {
    const countDownElements = document.querySelectorAll("[data-countdown-timer]");

    // Clear any existing intervals to avoid multiple timers
    countDownElements.forEach(element => {
        if (element.timerInterval) {
            clearInterval(element.timerInterval);
        }
    });

    countDownElements.forEach(element => {
        timer(element);
    });

    function timer(el) {
        const daysEl = el.querySelector("[data-days]");
        const hoursEl = el.querySelector("[data-hours]");
        const minutesEl = el.querySelector("[data-minutes]");
        const secondsEl = el.querySelector("[data-seconds]");

        // Set the date we're counting down to
        const countDownDate = new Date(el.dataset.countDownTo).getTime();

        if (isNaN(countDownDate)) return;

        function updateTimer() {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(el.timerInterval);
                daysEl.textContent = "0" + 0;
                hoursEl.textContent = "0" + 0;
                minutesEl.textContent = "0" + 0;
                secondsEl.textContent = "0" + 0;
            } else {
                // Time calculations for days, hours, minutes and seconds
                const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
                const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

                // Display the result in the elements
                daysEl.textContent = days;
                hoursEl.textContent = hours;
                minutesEl.textContent = minutes;
                secondsEl.textContent = seconds;
            }
        }

        el.timerInterval = setInterval(updateTimer, 1000);
    }
};