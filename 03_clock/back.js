const message = document.querySelector("#banner span");

const time = document.querySelector("#time");
const period = document.querySelector("#period");

const date = document.querySelector("#date");

const timeFormat = document.querySelector("#timeFormat");


// --------------------
// Greeting
// --------------------

function updateMessage() {

    const hour = new Date().getHours();

    if (hour < 6) {
        message.textContent = "... Good night ...";
    }

    else if (hour < 12) {
        message.textContent = "... Good morning ...";
    }

    else if (hour < 18) {
        message.textContent = "... Good afternoon ...";
    }

    else if (hour < 22) {
        message.textContent = "... Good evening ...";
    }

    else {
        message.textContent = "... Good night ...";
    }
}


// --------------------
// Clock
// --------------------

function updateTime() {

    const now = new Date();

    // Checkbox OFF = 24 hour
    // Checkbox ON  = 12 hour
    const is12Hour = timeFormat.checked;

    const parts = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: is12Hour
    }).formatToParts(now);


    const hour = parts.find(
        part => part.type === "hour"
    ).value;

    const minute = parts.find(
        part => part.type === "minute"
    ).value;

    const second = parts.find(
        part => part.type === "second"
    ).value;

    const dayPeriod = parts.find(
        part => part.type === "dayPeriod"
    );


    // Display time
    time.textContent = `${hour}:${minute}:${second}`;


    // Display AM / PM only in 12-hour mode
    if (is12Hour && dayPeriod) {
        period.textContent = dayPeriod.value;
    } else {
        period.textContent = "";
    }


    // --------------------
    // Date
    // --------------------

    date.textContent = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
}


// --------------------
// Slider
// --------------------

timeFormat.addEventListener("change", updateTime);


// --------------------
// Initial Load
// --------------------

updateMessage();
updateTime();


// --------------------
// Keep Clock Updated
// --------------------

setInterval(updateTime, 1000);