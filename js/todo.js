const todo = document.getElementById("todo");
const todoInput = todo.querySelector("input");
const todoBtn = todo.querySelector("button");
const todoList = document.querySelector("#todoList ul");
let todos = [];
const TODOKEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOKEY, JSON.stringify(todos));
}

function delTodo(event){
    const li = event.target.parentElement;
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function addTodo(){
    const newTodo = todoInput.value;
    if(newTodo === ""){
        alert("할 일을 작성해주세요.");
        todoInput.focus();
        return;
    }
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now()
        , text: newTodo
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoBtn.addEventListener("click", addTodo);

const savedTodos = localStorage.getItem(TODOKEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}