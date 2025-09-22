
'use strict';

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const yearResult = document.getElementById("year-result");
const monthResult = document.getElementById("month-result");
const dayResult = document.getElementById("day-result");

const submitButton = document.getElementById("submit");

dayInput.addEventListener("input", function () {
    if (dayInput.value.length > 2) {
        dayInput.value = dayInput.value.slice(0,2);
    }
    if (dayInput.value > 31) dayInput.value = 0;
});

monthInput.addEventListener("input", function () {
    if (monthInput.value.length > 2) {
        monthInput.value = monthInput.value.slice(0,2);
    }
    if (monthInput.value > 12) monthInput.value = 0;
});

yearInput.addEventListener("input", function () {
    if (yearInput.value.length > 4) {
        yearInput.value = yearInput.value.slice(0,4);
    }
    if (yearInput.value > 9999) yearInput.value = 0
})

submitButton.addEventListener("click", function () {
    // e.preventDefault();
    document.getElementById("day-error").textContent = "";
    document.getElementById("month-error").textContent = "";
    document.getElementById("year-error").textContent = "";

    const dd = Number(dayInput.value);
    const mm = Number(monthInput.value) - 1;
    const yy = Number(yearInput.value);

    let hasError = false;

    if (dd < 1 || dd > 31) {
        document.getElementById("day-error").textContent = " wrong day";
        hasError = true;
    }
    if (mm < 0 || mm > 11) {
        document.getElementById("month-error").textContent = "wrong month";
        hasError = true;
    }
    if (yearInput.value.length !== 4) {
        document.getElementById("year-error").textContent = "wrong year";
        hasError = true;
    }

    if (hasError) return;


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
