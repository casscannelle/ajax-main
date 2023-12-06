

let content = {
    title: "teste de envio",
    completed: "false",
    userId: 3
};

const todosContainer = document.getElementById('todos');
let todosMarkup = '';
let todosLength = 0;

// Cadastra um to-do
function setTodo(content) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(content),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
}

// Solicita um to-do
function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos', {})
    .then((response) => response.json())
    .then((todos) => {
        todosLength = todos.length;
        console.log(todosLength);
    })
    .catch((error) => console.error(error));
}

// Solicita to-do por ID
function getTodo(id) {
    fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then((response) => response.json())
    .then((todos) => { 
        todosMarkup += `
        <div class="todo-item" id="todo-${todos.id}">
        <h2>${todos.title}</h2>
        <p>${todos.completed}</p>
        </div>
        `;
        todosContainer.innerHTML = todosMarkup;
    })
    .catch((error) => console.error(error));
}

let todosIndex = 1;
getTodos();
getTodo(todosIndex);

const loadTodo = document.getElementById('loadTodos');

loadTodo.addEventListener('click', function(e) {
    if (todosIndex < todosLength)
        getTodo(todosIndex += 1);
});
