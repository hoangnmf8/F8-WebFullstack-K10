const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");
const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", function (event) {
	// event.stopPropagation();
	console.log("click btnElement!");
});

childElement.addEventListener(
	"click",
	function () {
		console.log("click childElement!");
	},
	true
);

parentElement.addEventListener(
	"click",
	function () {
		console.log("click parentElement!");
	},
	true
);
