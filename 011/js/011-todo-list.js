// orginal code
/*
const todoList = ['make dinner', 'wash dishes'];

renderToDoList();

function renderToDoList () {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
  
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  
  }
  
  // console.log(todoListHTML);
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

//const todoList2 = [];

function addToDo() {
  
  const inputElem = document.querySelector('.js-name-input');

  const name = inputElem.value;

  // adds item to the todoList array
  todoList.push(name);
  inputElem.value = '';
  renderToDoList();

  console.log(todoList);
}
*/

// console.log();
// modified code to include a check for empty string
const todoList = ['make dinner', 'wash dishes'];

renderToDoList();

function renderToDoList () {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
  
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  
  }
  
  console.log(todoListHTML);
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addToDo() {
  
  const inputElem = document.querySelector('.js-name-input');
  const name = inputElem.value.trim();

  // check for an empty value before adding it 
  if (name !== '') {

  // adds item to the todoList array
  todoList.push(name);
  console.log(todoList);
  renderToDoList();

  } else {

    console.log('empty value');

  }

}

// handles keydown event for the input field
function handleKeydown(event) {
  if (event.key === 'Enter') {
    addToDo();
  }
}
