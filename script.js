document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Vui lòng nhập công việc!");
    return;
  }

  let taskList = document.getElementById("taskList");

  let li = document.createElement("li");
  li.innerHTML = `${taskText} 
        <button onclick="completeTask(this)">✅</button>
        <button onclick="deleteTask(this)">❌</button>`;

  taskList.appendChild(li);
  saveTask(taskText);
  taskInput.value = "";
}

function completeTask(button) {
  let li = button.parentElement;
  li.classList.toggle("completed");
}

function deleteTask(button) {
  let li = button.parentElement;
  li.remove();
  removeTask(li.innerText);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let taskList = document.getElementById("taskList");

  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = `${task} 
            <button onclick="completeTask(this)">✅</button>
            <button onclick="deleteTask(this)">❌</button>`;
    taskList.appendChild(li);
  });
}

function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((t) => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
