const btnPriority = document.getElementById('priority-sort')
const btnCompleted = document.getElementById('completed-filter')
const btnDoing = document.getElementById('doing-filter')
const btnReset = document.getElementById('reset')

const todos = [
  {
    id: 1,
    content: 'Task A',
    completed: false,
    priority: 2,
  },
  {
    id: 2,
    content: 'Task B',
    completed: true,
    priority: 1,
  },
  {
    id: 3,
    content: 'Task C',
    completed: false,
    priority: 3,
  },
  {
    id: 4,
    content: 'Task D',
    completed: false,
    priority: 3,
  },
]

/**
 * Bước 1: truy vấn để lấy được tbody.
 * Bước 2: Tạo vòng lặp
 *  - tạo phần tử tr.
 *  - thêm nội dung cho từng tr
 *  - appendChild.
 *  - Xử lý sự kiện.
 *
 * Bước 3: Viết hàm xử lý delete
 * Bước 4: Viết hàm xử lý trạng thái completed
 * Bước 5: Viết hàm xử lý lọc theo các nút bấm.
 * Bước 6: Viết hàm xử lý reset.
 */

let viewTodos = [...todos]

function renderTotos(list) {
  const tbody = document.getElementById('todos')

  tbody.innerHTML = ''

  list.forEach((todo) => {
    const tr = document.createElement('tr')
    tr.innerHTML = /*html*/ `
      <td>${todo.content}</td>
      <td>${todo.priority}</td>
      <td>
        <button id="status" class="${todo.completed ? `completed` : `doing`}">${todo.completed ? `Completed` : `Doing`}</button>
      </td>
      <td><button onclick="deleteTodo(${todo.id})">delete</button></td>
    `

    tbody.appendChild(tr)
    tr.querySelector('button').addEventListener('click', () => toggleCompleted(todo.id))
  })
}

function deleteTodo(id) {
  const isConfirm = confirm('Bạn có chắc muốn xoá không? Xoá sẽ không thể khôi phục')
  if (isConfirm) {
    viewTodos = viewTodos.filter((item) => item.id !== id)
    renderTotos(viewTodos)
  }
}

function toggleCompleted(id) {
  console.log(id)
  viewTodos = viewTodos.map((item) => {
    if (item.id === id) {
      // if(item.completed) {
      //   item.completed === false
      // } else {
      //   item.completed = true
      // }

      item.completed = !item.completed
    }
    return item
  })

  renderTotos(viewTodos)
}

function sortPriority() {
  const priority = viewTodos.toSorted((a, b) => b.priority - a.priority)
  renderTotos(priority)
}

function completedFilter() {
  const completed = viewTodos.filter((item) => item.completed === true)
  renderTotos(completed)
}

function doingFilter() {
  const doing = viewTodos.filter((item) => item.completed === false)
  renderTotos(doing)
}

function reset() {
  renderTotos(viewTodos)
}

btnPriority.addEventListener('click', sortPriority)
btnCompleted.addEventListener('click', completedFilter)
btnDoing.addEventListener('click', doingFilter)

btnReset.addEventListener('click', reset)
renderTotos(viewTodos)
