// orginal code

const todoList = [{
  name: 'wash car',
  dueDate: '01-02-2024',
  }, {
    name: 'change oil',
    dueDate: '01-03-2024',
  }
];

renderToDoList();

function renderToDoList() {

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
  
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    
    const html = `
      <div>
        ${name}
      </div>
      <div>
        ${dueDate}
      </div>
      <button class="delete-todo-btn" onclick="
        todoList.splice(${i}, 1);
        renderToDoList();
      ">Delete</button>
    `;
    todoListHTML += html;
  
  }
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addToDo() {
  
  const inputElem = document.querySelector('.js-name-input');
  const dateInputElem = document.querySelector('.js-due-date-input');

  const name = inputElem.value.trim();
  const dueDate = dateInputElem.value.trim();

  if (name !== '') { // modified code to include a check for empty string
    
    todoList.push({ // adds item to the todoList array
      // name: name,
      // dueDate: dueDate,
      name,
      dueDate
    });
    inputElem.value = '';
    renderToDoList();

  } else {
    console.log('empty value');
    alert('Enter a to-do item');
  }
}

function handleKeydown(e) { // handles keydown event for the input field
  if (e.key === 'Enter') {
    e.preventDefault();
    console.log('keydown prevented');
    alert('Enter a to-do item');
  }
}