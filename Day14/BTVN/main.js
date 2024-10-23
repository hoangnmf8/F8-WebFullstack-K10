const tbody = document.getElementById("tbody");
const todoForm = document.getElementById("todoForm");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");

const url = "http://localhost:3000/todos";

let todos = [];

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
	console.log(id);

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
	// http://localhost:3000/todos/:id
}

function updateTodo(id) {
	console.log(id);
}

function handleTodo(event) {
	event.preventDefault();
	console.log("add");
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

todoForm.addEventListener("submit", handleTodo);
