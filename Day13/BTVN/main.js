/**
 * - Xây dựng giao diện hiển thị việc cần làm dạng bảng.
 * - Viết các hàm chức năng cho form và các nút bấm: Thêm, cập nhật trạng thái, sửa, xoá việc cần làm.
 * - Khi nhấn vào tên của việc cần làm sẽ cập nhật trạng thái và màu sắc của title, ví dụ: "task 1 - completed" hoặc "task 2 - pending".
 */

const todoList = document.getElementById("todoList");
const titleEle = document.getElementById("title");
const descriptionEle = document.getElementById("description");
const todoForm = document.getElementById("todoForm");
const btnSubmit = document.getElementById("btnSubmit");

let idEditing = null;
let todoEditing = {};

function generateRandomID(n) {
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let id = "todo-";
	for (let i = 0; i < n; i++) {
		let randomIndex = Math.floor(Math.random() * characters.length);
		id += characters[randomIndex];
	}
	return id;
}

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function handleLocalStorage(todos) {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodo(datas) {
	todoList.innerHTML = "";
	datas.length
		? datas.forEach((item) => {
				let trEle = document.createElement("tr");
				trEle.innerHTML = `
      <td>${item.id}</td>
      <td>
        <button class="${item.status ? "completed" : "pending"}" onclick="toggleStatus('${item.id}')">${item.title} - ${
					item.status ? "Completed" : "Pending"
				}</button>
      </td>
      <td>${item.description}</td>
        <td>
        <button onclick="removeTodo('${item.id}')" class="btn btn-danger">Remove</button>
        <button onclick="updateTodo('${item.id}')" class="btn btn-warning">Update</button>
      </td>
    `;
				todoList.appendChild(trEle);
		  })
		: (todoList.innerHTML = "<tr><td colspan='4'>No data</td></tr>");
}

function validTodo(todo) {
	// logic validate todo
}

function addTodo(event) {
	event.preventDefault();
	if (idEditing) {
		// logic edit todo
	} else {
		// logic add todo
	}
	// logic chung
}

function removeTodo(id) {
	// logic remove todo
}

function updateTodo(id) {
	// logic đưa dữ liệu cần update vào form và cập nhật idEditing
}

function resetForm() {
	// logic reset form
}

function toggleStatus(id) {
	// logic toggle status
}

renderTodo(todos);
todoForm.addEventListener("submit", addTodo);
btnReset.addEventListener("click", resetForm);
