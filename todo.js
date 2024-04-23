let todoList = [];

let addIteam = function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  
  let inputDate = document.querySelector('#date-input');
  let todoDate = inputDate.value;

  todoList.push({item:todoItem, dueDate:todoDate});
  inputElement.value = '';
  inputDate.value = '';
  displayItem();
}

let addButton = document.querySelector('#add-button');
addButton.addEventListener('click', addIteam);

function displayItem(){
  let displayElemet = document.querySelector('#mitem');
  let newHtml ="";
  for (let i = 0; i < todoList.length; i++){
    /*First Method to Access Arry Object*/
    //let item = todoList[i].item;
    //let dueDate = todoList[i].dueDate;
    /* In Second Method We are using Directly with the help of Arry Object Destructuring */
    let {item, dueDate} = todoList[i];
    newHtml +=`
    <div class="listitem">
    <span id="Item">${item}</span>
    <span id="Date">${dueDate}</span>
    <button id="delete-button" onclick="todoList.splice(${i}, 1);displayItem();">Delete</button>
    </div>
    `;
  }
  displayElemet.innerHTML = newHtml;
}


/*let deleteIteam = todoList.splice(i,1);
let deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener('click', deleteIteam);

displayItem();*/