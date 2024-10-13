const userInfor = {}

// function change1() {
//   console.log(event.target.value)
//   userInfor.email = event.target.value
//   // userInfor[event.targer.name] = event.target
//   console.log(userInfor)
// }

// function change2() {
//   console.log(event.target.value)
//   userInfor.password = event.target.value
//   console.log(userInfor)
// }

// function change3() {
//   console.log(event.target.value)
//   userInfor.gender = event.target.value
//   console.log(userInfor)
// }

// function change() {
//   userInfor[event.target.name] = event.target.value
//   console.log(userInfor)
// }

// http://127.0.0.1:5501/15.%20DOM_3/Demo/ex03.html?email=1%40gmail.com&password=1234567890&gender=female

const formElement = document.getElementById('register')

formElement.addEventListener('submit', (event) => {
  event.preventDefault()
  console.dir(event.target[0])
  // Cách 1: Sử dụng vòng lặp để lặp qua từng index của event.target -> lấy name-value đưa vào userInfor

  // Cách 2: Chọn từng phần tử input của form, sau đó lấy value thông qua element.value

  const emailElement = document.getElementById('email')
  console.log(emailElement.value)
})
