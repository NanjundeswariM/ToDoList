const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterBtns = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

function saveTasks() {
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function renderTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {

        if (currentFilter === "active")
            return !task.completed;

        if (currentFilter === "completed")
            return task.completed;

        return true;
    });

    filteredTasks.forEach(task => {

        const li = document.createElement("li");

        li.className =
            task.completed
            ? "task completed"
            : "task";

        li.innerHTML = `
        
        <div class="task-left">

            <input
                type="checkbox"
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${task.id})">

            <span class="task-text">
                ${task.text}
            </span>

        </div>

        <div class="actions">

            <button
                class="edit-btn"
                onclick="editTask(${task.id})">

                Edit

            </button>

            <button
                class="delete-btn"
                onclick="deleteTask(${task.id})">

                Delete

            </button>

        </div>
        `;

        taskList.appendChild(li);
    });

    saveTasks();
}

function addTask() {

    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    renderTasks();
}

function deleteTask(id) {

    tasks = tasks.filter(
        task => task.id !== id
    );

    renderTasks();
}

function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {

            task.completed =
                !task.completed;
        }

        return task;
    });

    renderTasks();
}

function editTask(id) {

    const task = tasks.find(
        task => task.id === id
    );

    const updatedText = prompt(
        "Edit Task",
        task.text
    );

    if (
        updatedText !== null &&
        updatedText.trim() !== ""
    ) {
        task.text = updatedText.trim();
    }

    renderTasks();
}

addBtn.addEventListener(
    "click",
    addTask
);

taskInput.addEventListener(
    "keypress",
    function (e) {

        if (e.key === "Enter") {
            addTask();
        }
    }
);

filterBtns.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            filterBtns.forEach(
                b => b.classList.remove("active")
            );

            btn.classList.add("active");

            currentFilter =
                btn.dataset.filter;

            renderTasks();
        }
    );
});

renderTasks();