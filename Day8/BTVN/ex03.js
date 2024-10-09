/**
 * ## Bài 3: Viết hàm đếm ngược thời gian

Viết hàm `countDown(time)` nhận vào một tham số `time` là một số nguyên dương đại diện cho số giây cần đếm ngược. Hàm sẽ đếm ngược thời gian từ `time` về 0 và hiển thị các thời gian còn lại (tính theo giây) ở màn hình console sau mỗi giây.
 */

function countDown(time) {
  if (typeof time !== 'number' || Number.isNaN(time) || time <= 0) {
    console.log('Invalid')
    return
  }
  const counter = setInterval(() => {
    console.log(time)
    time--
    if (time < 0) {
      clearInterval(counter)
    }
  }, 1000)
}

let time = +prompt('Mời nhập số giây cần đếm ngược:')
countDown(time)
