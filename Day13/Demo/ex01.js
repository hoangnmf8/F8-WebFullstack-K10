const formElement = document.getElementById("registerForm");
formElement.addEventListener("submit", function (event) {
	event.preventDefault();

	// Cach 1:
	// const valueEmail = document.getElementById("email").value;
	// const valuePassword = document.getElementById("password").value;
	// console.log({ email: valueEmail, password: valuePassword });

	// Cach 2:
	const formData = new FormData(formElement);
	const data = Object.fromEntries(formData);
	if (!data.email || !data.password) {
		alert("Vui long nhap du thong tin!");
		return;
	}

	if (data.password.length < 8) {
		alert("Password can toi thieu 8 ky tu!");
		return;
	}

	const usersSaved = JSON.parse(localStorage.getItem("users") || "[]");

	localStorage.setItem("users", JSON.stringify([...usersSaved, data]));

	// Cach 3:
	// const data = {};
	// formData.forEach((value, key) => {
	// 	data[key] = value;
	// });
	console.dir(formElement);
	// formElement.reset();
	this.reset();
});

localStorage.setItem("infor", "hoang");
localStorage.setItem("darkode", "true");
localStorage.clear(); // dọn dẹp toàn bộ các thông tin lưu ở storage
// localStorage.removeItem("infor"); // remove 1 key-value trong storage
