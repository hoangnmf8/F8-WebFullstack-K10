// document.write('Hello F8!')
// document.write('Hello F8!')
// document.write('Hello F8!')
// document.write('Hello F8!')

const ulElement = document.getElementsByTagName('ul')[0]

// console.dir(ulElement)

// const liElement = document.createElement('li')
// console.log(liElement)

// liElement.innerText = 'Item 5'
// console.log(liElement)

// ulElement.appendChild(liElement)

// TODO: Viết hàm addToDo("task") nhận vào việc cần làm (lấy từ prompt) và thêm công việc đó vào danh sách việc cần làm -> Hiển thị ra màn hình.

// const task = prompt('Mời nhập việc cần làm')

// function addToDo(task) {
//   let taskElement = document.createElement('li')
//   taskElement.innerText = task
//   ulElement.appendChild(taskElement)
//   console.log(ulElement.children)
// }

// addToDo(task)

console.dir(ulElement)

// TODO: Sử dụng removeChild() để gỡ element con thứ 2 (index = 1) của ulElement.

// Cach 1:
// const liElement2 = document.querySelector('ul > li:nth-child(2)')
// ulElement.removeChild(liElement2)

// Cach 2:
// ulElement.removeChild(ulElement.children[1])

const liElement3 = document.querySelector('ul > li:nth-child(3)')

// liElement3.remove()

const newLiElement = document.createElement('li')

newLiElement.innerText = 'New content'

ulElement.replaceChild(newLiElement, liElement3)
