const countDownTimer = () => {
    const countDownElements = document.querySelectorAll("[data-countdown-timer]");

    countDownElements.forEach(element => {
        timer(element);
    });

    function timer(el) {
        // Set the date we're counting down to
        const countDownDate = new Date(
            el.dataset.countDownTo
        ).getTime();

        if (isNaN(countDownDate)) return;

        const x = setInterval(function () {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Add leading zeros when number is < 10 (if needed)
            if (days < 10) {
                days = "0" + days;
            }
            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            // If the countdown is finished, stop timer and set values to zero
            if (distance < 0) {
                clearInterval(x);
                days = "0" + 0;
                hours = "0" + 0;
                minutes = "0" + 0;
                seconds = "0" + 0;
            }

            // Display the result in the elements
            el.querySelector("[data-days]").textContent = days;
            el.querySelector("[data-hours]").textContent = hours;
            el.querySelector("[data-minutes]").textContent = minutes;
            el.querySelector("[data-seconds]").textContent = seconds;
        }, 1000);
    }
};