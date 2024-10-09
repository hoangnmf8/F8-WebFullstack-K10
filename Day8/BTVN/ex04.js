/**
 * ## Bài 4: Viết hàm đếm số ngày đến tết dương lịch

Viết hàm `countDownToNewYear()` để đếm số ngày còn lại đến tết dương lịch từ thời điểm hiện tại. Hàm sẽ hiển thị số ngày còn lại.

 */

function countDownToNewYear() {
  let today = new Date()
  let newYear = new Date(today.getFullYear() + 1, 0, 1)
  let diff = newYear - today
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

console.log(countDownToNewYear())
