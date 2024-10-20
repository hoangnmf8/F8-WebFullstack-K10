function generateRandomId(n, prefix = "todo-") {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let id = prefix;
	for (let i = 0; i < n; i++) {
		id += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	return id;
}
const tbody = document.getElementById("tbody");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const resetBtn = document.getElementById("reset-btn");
const addBtn = document.getElementById("add-btn");

let todoSaved = JSON.parse(localStorage.getItem("todos") || "[]");

let idEditing = null;
let todoEditing = {};

function handleViewTodo(datas) {
	tbody.innerText = "";
	datas.length
		? datas.forEach((item) => {
				let trElement = document.createElement("tr");
				trElement.innerHTML = `
    <td>${item.id}</td>
    <td>
      <div onclick="toggleStatus('${item.id}')" class="${item.status ? "completed" : "pending"}">${item.title} - ${
					item.status ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-xmark"></i>'
				}</div>
    </td>
    <td>${item.description}</td>
    <td>
      <button class="btn btn-danger" onclick="removeTodo('${item.id}')">Remove</button>
      <button class="btn btn-warning" onclick="updateTodo('${item.id}')">Update</button>
    </td>
    `;
				tbody.appendChild(trElement);
		  })
		: (tbody.innerHTML = `<tr><td colspan="4">Nothing todo</td></tr>`);

	localStorage.setItem("todos", JSON.stringify(datas));
}

function handleTodo(event) {
	event.preventDefault();
	if (idEditing) {
		// logic Edit
		const todo = {
			title: titleElement.value,
			description: descriptionElement.value,
			status: todoEditing.status,
			id: idEditing,
		};
		if (!validTodo(todo)) return;
		todoSaved = todoSaved.map((item) => (item.id === idEditing ? todo : item));
	} else {
		// logic Add
		// 1. Lấy dữ liệu từ form
		const todo = {
			title: titleElement.value,
			description: descriptionElement.value,
			status: false,
			id: generateRandomId(4),
		};
		// 2. Valid dữ liệu
		if (!validTodo(todo)) return;
		// 3. Thêm dữ liệu vào todoSaved
		todoSaved.push(todo);
	}

	// logic chung
	// 4. Cập nhật giao diện và Database
	handleViewTodo(todoSaved);
	resetForm();
}

function removeTodo(id) {
	if (confirm("Are you sure?")) {
		todoSaved = todoSaved.filter((item) => item.id !== id);
		console.log(todoSaved);
		handleViewTodo(todoSaved);
	}
}

function updateTodo(id) {
	console.log(id);
	idEditing = id;
	const todo = todoSaved.find((item) => item.id === id);
	titleElement.value = todo.title;
	descriptionElement.value = todo.description;
	todoEditing.status = todo.status;
	addBtn.innerText = "Update";
}

function validTodo(todo) {
	if (!todo.title || !todo.description) {
		alert("Please enter full fields!");
		return false;
	}
	return true;
}

function resetForm() {
	todoForm.reset();
	idEditing = null;
	addBtn.innerText = "Add";
}

function toggleStatus(id) {
	todoSaved = todoSaved.map((item) => {
		if (item.id === id) {
			item.status = !item.status;
			return item;
		}
		return item;
	});
	console.log(todoSaved);
	handleViewTodo(todoSaved);
}

resetBtn.addEventListener("click", resetForm);

handleViewTodo(todoSaved);
todoForm.addEventListener("submit", handleTodo);
