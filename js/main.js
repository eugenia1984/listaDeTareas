const d = document;
const input = d.querySelector("input");
const addBtn = d.querySelector(".btn-add");
const historyBtn = d.querySelector(".view-history");
const ul = d.querySelector("ul");
const empty = d.querySelector(".empty");
let taskHistory = [];

const addDeleteBtn = () => {
  const deleteBtn = d.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = d.querySelectorAll("li");
    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;

  if (text !== "") {
    taskHistory.push(text);

    const li = d.createElement("li");
    const p = d.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});



historyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const p = d.createElement("p");
})