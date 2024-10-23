const tbody = document.getElementById("tbody");
const todoForm = document.getElementById("todoForm");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const addBtn = document.getElementById("add-btn");

const url = "http://localhost:3000/todos";

let todos = [];
let todoEditing = {
	id: null,
};

fetch(url)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		// xu ly logic
		todos.push(...data);
		renderTodos(todos);
	})
	.catch((err) => {
		console.log(err);
	});

function renderTodos(todos) {
	tbody.innerText = "";
	todos.forEach((item) => {
		let tr = document.createElement("tr");
		tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td>
          <button onclick="removeTodo(${item.id})">Remove</button>
          <button onclick="updateTodo(${item.id})">Update</button>
        </td>
      `;
		tbody.appendChild(tr);
	});
}

function removeTodo(id) {
	confirm("Are you sure?") &&
		fetch(`${url}/${id}`, {
			method: "DELETE",
		})
			.then(() => {
				console.log("Xoa thanh cong");
				todos = todos.filter((item) => item.id !== id);
				renderTodos(todos);
			})
			.catch((err) => console.log(err));
}

function updateTodo(id) {
	todoEditing = todos.find((item) => item.id === id);
	titleElement.value = todoEditing.title;
	description.value = todoEditing.description;
	addBtn.innerText = "Update";
}

function handleTodo(event) {
	event.preventDefault();
	if (todoEditing.id) {
		// logic edit
		const todo = {
			title: titleElement.value,
			description: descriptionElement.value,
			status: todoEditing.status,
		};
		fetch(`${url}/${todoEditing.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todo),
		}).then(() => {
			// Cach 1:
			todos = todos.map((item) => {
				if (item.id === todoEditing.id) {
					return todoEditing;
				}

				// Cach 2: Goi server lay lai danh sach viec can lam
				return item;
			});
			renderTodos(todos);
		});
	} else {
		// logic add
		const todo = {
			title: titleElement.value,
			description: descriptionElement.value,
			status: false,
		};
		fetch("http://localhost:3000/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todo),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				todos.push(...data);
				renderTodos(todos);
				console.log(`Them thanh cong, `, data);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}

todoForm.addEventListener("submit", handleTodo);
