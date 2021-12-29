//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//EVent Listner
todoButton.addEventListener('click', addTodo);

//function
function addTodo(event){
  event.preventDefault();
//todo div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//create li
const newTodo = document.createElement('li');
newTodo.innerText = "hey";
newTodo.classList.add("todo-items");
todoDiv.appendChild(newTodo);
//CHECK MARK BUTTON
const completedButton = document.createElement("button");
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//CHECK Trash BUTTON
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("complete-btn");
todoDiv.appendChild(trashButton);
}
//append to list
todoList.appendChild(todoDiv);
