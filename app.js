let pendingTasksList = document.getElementById('pendingTasksList')
let completedTasksList = document.getElementById('completedTasksList')
let taskNameTextBox = document.getElementById('taskNameTextBox')
let btnAddTask = document.getElementById('btnAddTask')

btnAddTask.addEventListener('click', function () {

  let taskName = taskNameTextBox.value
  let taskListItem = document.createElement("li")
  taskListItem.append(taskName)
  let checkBox = document.createElement("input")
  checkBox.type = "checkbox"
  pendingTasksList.append(checkBox)
  pendingTasksList.append(taskListItem)
  let deleteButton = document.createElement("button")
  pendingTasksList.append(deleteButton)
  deleteButton.innerHTML = "Remove"
  checkBox.addEventListener('change', function() {
    if(this.checked) {
      completedTasksList.append(checkBox)
      completedTasksList.append(taskListItem)
      completedTasksList.append(deleteButton)
    }
    else {
      pendingTasksList.append(checkBox)
      pendingTasksList.append(taskListItem)
      pendingTasksList.append(deleteButton)
    }

  })
  deleteButton.addEventListener('click', function() {
    if(pendingTasksList.contains(taskListItem)) {
      pendingTasksList.removeChild(taskListItem)
      pendingTasksList.removeChild(deleteButton)
      pendingTasksList.removeChild(checkBox)
    }
    else if (completedTasksList.contains(taskListItem)){
    completedTasksList.removeChild(taskListItem)
    completedTasksList.removeChild(deleteButton)
    completedTasksList.removeChild(checkBox)
    }
  })
})
