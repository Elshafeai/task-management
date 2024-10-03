// script.js
function addTask() {
    const taskInput = document.getElementById('task');
    const taskValue = taskInput.value.trim();

    const categoryInput = document.getElementById('category');
    const categoryValue = categoryInput.value;

    const timeInput = document.getElementById('time');
    const timeValue = timeInput.value;

    if (taskValue === "" || timeValue === "") {
        alert("Please enter a task and time");
        return;
    }

    const taskList = document.getElementById('task-list');

    // Create a new list item for the task
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span><strong>${taskValue}</strong> - ${categoryValue} at ${timeValue}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(listItem);

    // Clear the input fields
    taskInput.value = "";
    timeInput.value = "";
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
