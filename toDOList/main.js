
function createTodoItem(title){
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "checkbox";


	const lable = document.createElement("lable");
	lable.innerText = title;
	lable.className = "title";

	const input = document.createElement("input");
	input.type = "text";
	input.className = "textfield";

	const buttonEdit = document.createElement("button");
	buttonEdit.innerText = "Изменить";
	buttonEdit.className = "edit";

	const buttonDelete = document.createElement("button");
	buttonDelete.innerText = "Удалить";
	buttonDelete.className = "delete";

	const  todoitems = document.createElement("li");
	todoitems.className = "todo-item";

	todoitems.appendChild(checkbox);
	todoitems.appendChild(lable);
	todoitems.appendChild(input);
	todoitems.appendChild(buttonEdit);
	todoitems.appendChild(buttonDelete);

	ChangeAll(todoitems);

	return todoitems;
};



function ChangeAll(todo){
	const todoChekbox = todo.querySelector(".checkbox");
	const toBattonEdit = todo.querySelector(".edit");
	const toBattonDelete = todo.querySelector(".delete");

	todoChekbox.addEventListener("change", changeTodoitems);
	toBattonEdit.addEventListener("click", EditTodoitems);
	toBattonDelete.addEventListener("click", DeleteTodoitems);
};



function changeTodoitems(){
	const listtItem = this.parentNode;
	listtItem.classList.toggle("completed");

};

function EditTodoitems(){
	const listItem = this.parentNode;
	const ToTitle = listItem.querySelector(".title");
	const TextField = listItem.querySelector(".textfield");
	const check = listItem.classList.contains("editing");

	if(check){
		ToTitle.innerText = TextField.value;
		this.innerText = "Изменить";
	}else{
		TextField.value= ToTitle.innerText;
		this.innerText = "Сохранить";
	}
	listItem.classList.toggle("editing");

};

function DeleteTodoitems(){
	const listItem = this.parentNode;
	toDoList.removeChild(listItem);	

};





function addToDoForm(event){
	event.preventDefault();
	if(AddInput.value === "")return alert("необходимо ввести задание!")

	const listItem = createTodoItem(AddInput.value);
	toDoList.appendChild(listItem);
	AddInput.value = "";
};




const toDoList = document.getElementById("todo-list");
const ToDoForm = document.getElementById("todo-form");
const AddInput = document.getElementById("add-input");
const AddButton = document.getElementById("add-button");
const ToDoItem = document.querySelectorAll(".todo-item");



ToDoForm.addEventListener("submit", addToDoForm);





function concat(to, from, mail){
	
	console.log(
	`
	to: ${to}
	from: ${from}
	mail: ${mail}
	`
		)
}
concat("max", "gene","amailo.ru");
