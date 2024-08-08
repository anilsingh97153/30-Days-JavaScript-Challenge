const taskForm = document.querySelector("#task-form");
const newTaskBtn = document.querySelector(".new-task-btn");
const saveBtn = document.querySelector("#save-btn");
const taskTable = document.querySelector(".task-table");
const taskContainer = document.querySelector(".task-container");

const tasks = [
    {
        id: Date.now(),
        title: "Task-1",
        desc: "First task.",
        dueDate: "15-8-2024",
    }
]

taskForm.style.display = "none";

newTaskBtn.addEventListener("click", () => {
    taskForm.style.display = "flex";
    newTaskBtn.style.display = "none";
})

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // collect form data
    const title = document.querySelector("#title").value;
    const desc = document.querySelector("#desc").value;
    const dueDate = document.querySelector("#due-date").value;

    // adding a new task
    const newTask = {
        id: Date.now(),
        title: title,
        desc: desc,
        dueDate: dueDate,
    }

    tasks.push(newTask);

    taskForm.reset();

    // Hide the form and show the 'Add new Task' button again
    taskForm.style.display = "none";
    newTaskBtn.style.display = "block";

    // Update task table with the new task
    tasksDisplay(tasks);
})

function tasksDisplay(tasks) {
    if(tasks.length === 0) {
        taskContainer.style.display = "none";
    } else {
        taskContainer.style.display = "flex";
        // Clear the table before appending new rows
        taskTable.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Task Description</th>
            <th>Task Due Date</th>
            <th>Edit Task</th>
        </tr>`;
        tasks.map(task => {
            const newTask = document.createElement('tr');
            newTask.innerHTML = `
            <td>${task.title}</td>
            <td>${task.desc}</td>
            <td>${task.dueDate}</td>
            <td><button class="edit-btn" data-id="${task.id}">Edit</button></td>
            `
            taskTable.appendChild(newTask);
        });
    }
}

tasksDisplay(tasks);

taskTable.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON") {
        const taskId = event.target.getAttribute("data-id");
        const task = tasks.find(task => task.id == taskId);
        if(task) {
            taskForm.style.display = "flex";
            newTaskBtn.style.display = "none";
            document.querySelector("#title").value = task.title;
            document.querySelector("#desc").value = task.desc;
            document.querySelector("#due-date").value = task.dueDate;
        }
    }
})




