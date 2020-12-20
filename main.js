// selectors
let newTask = document.querySelector(".form-input")
let addTask = document.querySelector(".form-btn")
const todoBody = document.querySelector(".todo-ul")

// event listeners
addTask.addEventListener("click",addTodo);
todoBody.addEventListener("click",deleteEdit)


// function
function addTodo(event) {
    event.preventDefault();

    const newLi = document.createElement("li");
    newLi.classList.add("todo-li");
    todoBody.appendChild(newLi);

    const liP = document.createElement("p")
    liP.innerText = newTask.value;
    liP.classList.add("todo-p");
    newLi.appendChild(liP);

    const todoDivBtn = document.createElement("div")
    todoDivBtn.classList.add("todo-li_btn");
    newLi.appendChild(todoDivBtn);

    const deleteBtn = document.createElement("i");
    const deleteArr =["delete-btn","far", "fa-trash-alt", "btn"]
    deleteBtn.classList.add(...deleteArr)
    todoDivBtn.appendChild(deleteBtn)

    const editBtn = document.createElement("i");
    const editArr = ["edit-btn", "far", "fa-edit", "btn"]
    editBtn.classList.add(...editArr)
    todoDivBtn.appendChild(editBtn)

    const topBtn = document.createElement("i");
    const topArr = ["top-btn", "far", "fa-star", "btn"]
    topBtn.classList.add(...topArr)
    todoDivBtn.appendChild(topBtn)

    // clear
    newTask.value = "";


}

function deleteEdit(e) {
    const item = e.target;
    // delete
    if( item.classList[0] === "delete-btn"){
        const parrent = item.parentElement;
        const todoLi = parrent.parentElement;
        todoLi.classList.add("delete-animation")
        todoLi.addEventListener("transitionend", function(){
            todoLi.remove()
        })
    }
}