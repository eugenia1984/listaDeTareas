const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDay();
const todayDate = `Today: ${month} / ${day} / ${year}`;

const today = document.querySelector("#today");
today.textContent = todayDate;
