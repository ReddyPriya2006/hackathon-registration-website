// Countdown Timer

const eventDate = new Date("October 15, 2026 09:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);

updateCountdown();


// Registration Form

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const teamName =
        document.getElementById("teamName").value.trim();

    const leaderName =
        document.getElementById("leaderName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const college =
        document.getElementById("college").value.trim();

    const teamSize =
        document.getElementById("teamSize").value;

    const domain =
        document.getElementById("domain").value;

    const idea =
        document.getElementById("idea").value.trim();

    if (
        teamName === "" ||
        leaderName === "" ||
        email === "" ||
        phone === "" ||
        college === "" ||
        teamSize === "" ||
        domain === "" ||
        idea === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    document.getElementById("successMessage").style.display = "block";

    form.reset();

    document.getElementById("successMessage")
        .scrollIntoView({
            behavior: "smooth"
        });
});