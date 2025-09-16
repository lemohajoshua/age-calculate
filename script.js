
'use strict';

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const yearResult = document.getElementById("year-result");
const monthResult = document.getElementById("month-result");
const dayResult = document.getElementById("day-result");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
    // e.preventDefault(); 

    const dd = Number(dayInput.value);
    const mm = Number(monthInput.value) - 1;
    const yy = Number(yearInput.value);

    if (!dd || !monthInput.value || !yy) {
        alert("Please enter your date");
        return;
    }

    const birthDate = new Date(yy, mm, dd);
    const today = new Date();

    if (birthDate > today) {
        alert("You are not born yet");
        return;
    }

    let year = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    let day = today.getDate() - birthDate.getDate();

    if (day < 0) {
        month--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        day += prevMonth.getDate();
    }

    if (month < 0) {
        year--;
        month += 12;
    }

    yearResult.textContent = year;
    monthResult.textContent = month;
    dayResult.textContent = day;
});
