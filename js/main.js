const d = document;
const input = d.querySelector("input");
const addBtn = d.querySelector(".btn-add");
const historyBtn = d.querySelector(".view-history");
const clearHistoryBtn = d.querySelector(".clear-history-btn");
const ul = d.querySelector("ul");
const empty = d.querySelector(".empty");
const taskHistoryDiv = d.querySelector("#task-history");
const clearHistory = d.querySelector("#clear-history");
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
  // Filter the repeated tasks
  let noRepeatedTask = taskHistory.filter((item, index) => {
    return taskHistory.indexOf(item) === index;
  });
  // Transform the no repeated array items to String
  p.textContent = noRepeatedTask.join(", ");
  taskHistoryDiv.appendChild(p);
  taskHistory = [];
  clearHistory.classList.remove("no-show");
  clearHistory.classList.add("show");
});

clearHistoryBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (taskHistoryDiv.hasChildNodes()) {
    taskHistoryDiv.removeChild(taskHistoryDiv.lastChild);
  }
});
