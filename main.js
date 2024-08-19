const start = Date.now();
const date = new Date(start);
const dateString = start.toString();

const h1Client = document.querySelector('#client-hour');

h1Client.innerText = h1Client.innerText + dateInYyyyMmDdHhMmSs(date);


function padTwoDigits(num) {
    return num.toString().padStart(2, "0");
}

function dateInYyyyMmDdHhMmSs(date, dateDiveder = "-") {

    return (
        [
            date.getFullYear(),
            padTwoDigits(date.getMonth() + 1),
            padTwoDigits(date.getDate()),
        ].join(dateDiveder) +
        " " +
        [
            padTwoDigits(date.getHours()),
            padTwoDigits(date.getMinutes()),
            padTwoDigits(date.getSeconds()),
        ].join(":")
    );
}
