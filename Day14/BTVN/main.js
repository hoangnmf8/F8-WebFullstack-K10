const tbody = document.getElementById("tbody");

fetch("http://localhost:3000/todos")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		// xu ly logic
		data.forEach((item) => {
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
	})
	.catch((err) => {
		console.log(err);
	});

function removeTodo(id) {
	console.log(id);
}

function updateTodo(id) {
	console.log(id);
}
