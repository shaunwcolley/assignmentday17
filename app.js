let pendingTasksList = document.getElementById('pendingTasksList')
let completedTasksList = document.getElementById('completedTasksList')
let taskNameTextBox = document.getElementById('taskNameTextBox')
let btnAddTask = document.getElementById('btnAddTask')

btnAddTask.addEventListener('click', function () {

  let taskName = taskNameTextBox.value
  let taskListItem = document.createElement("li")
  let checkBox = document.createElement("input")
  checkBox.type = "checkbox"
  let deleteButton = document.createElement("button")
  if(taskName == "" || taskName == " " || taskName == "  ") {
    alert("Please enter text when making a task.")
  } else {
    pendingTasksList.append(taskListItem)
    taskListItem.append(checkBox)
    taskListItem.append(taskName)
    taskListItem.append(deleteButton)
    deleteButton.innerHTML = "Remove"
  }

  checkBox.addEventListener('change', function() {
    if(this.checked) {
      completedTasksList.append(taskListItem)
    }
    else {
      pendingTasksList.append(taskListItem)
    }

  })
  deleteButton.addEventListener('click', function() {
    if(pendingTasksList.contains(taskListItem)) {
      pendingTasksList.removeChild(taskListItem)
    }
    else if (completedTasksList.contains(taskListItem)){
    completedTasksList.removeChild(taskListItem)
    }
  })
})
