/**
 * ## Bài 2: Viết hàm hiển thị thời gian hiện tại ở màn console sau mỗi giây.

Viết hàm `showTime()` để hiển thị thời gian hiện tại sau mỗi một giây.
 */

function showTime() {
  setInterval(() => {
    console.log(new Date())
  }, 1000)
}

showTime()
