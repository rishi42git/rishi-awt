$(document).ready(function () {

  loadTasks();

  // ADD TASK
  $("#addBtn").click(function () {
    const task = $("#taskInput").val().trim();
    if (task === "") return;

    addTask(task);
    $("#taskInput").val("");
    saveTasks();
  });

  // Edit/Delete via delegation
  $("#taskList").on("click", "button", function () {
    if ($(this).hasClass("remove")) {
      $(this).closest("li").remove();
      saveTasks();
    }

    if ($(this).hasClass("edit")) {
      const span = $(this).closest("li").find("span");
      const updated = prompt("Edit task:", span.text());
      if (updated !== null && updated.trim() !== "") {
        span.text(updated.trim());
        saveTasks();
      }
    }
  });

  function addTask(text) {
    const li = `
      <li>
        <span>${text}</span>
        <div>
          <button class="edit">Edit</button>
          <button class="remove">X</button>
        </div>
      </li>`;
    $("#taskList").append(li);
  }

  function saveTasks() {
    const items = [];
    $("#taskList li span").each(function () {
      items.push($(this).text());
    });
    localStorage.setItem("todoList", JSON.stringify(items));
  }

  function loadTasks() {
    const saved = localStorage.getItem("todoList");
    if (!saved) return;

    JSON.parse(saved).forEach(t => addTask(t));
  }

});
