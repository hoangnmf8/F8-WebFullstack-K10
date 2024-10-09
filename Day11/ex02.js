/**
 * Tư duy phân tách các bước:
 *
 * Bước 1: Truy xuất nút bấm.
 * Bước 2: Gắn sự kiện cho nút bấm
 *
 * Bước 3: Trong function: sử dụng classList.toggle cho body.
 */

const pFirstElement = document.getElementsByTagName('p')[0]

function changeTheme() {
  document.body.classList.toggle('dark')
  // pFirstElement.classList.toggle('dark')

  // document.body.style.backgroundColor = '#000'
  // document.body.style.color = '#fff'
}

/**
 * Thao tác class bằng "className" theo 2 cách: get và set
 * Thao tác class với "classList":
 * - add("className1", "className2",...): thêm class.
 * - remove("className1", "claseName2",...): gỡ class.
 * - replace("oldClassName", "newClassName"): thay đổi, cập nhật 1 className
 * - toggle("className"): Nếu chưa có thì gắn vào, có rồi thì gỡ.
 */
