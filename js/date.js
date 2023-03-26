const D = document;

// Info date
const dateNumber = D.getElementById("dateNumber");
const dateText = D.getElementById("dateText");
const dateMonth = D.getElementById("dateMonth");
const dateYear = D.getElementById("dateYear");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("en", { day: "numeric" });
  dateText.textContent = date.toLocaleString("en", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("en", { month: "short" });
  dateYear.textContent = date.toLocaleString("en", { year: "numeric" });
};

setDate();
