const btnElement = document.querySelector('.btn01')

btnElement.style.backgroundColor = 'blue'
btnElement.style.padding = '12px'
btnElement.style.borderRadius = '6px'

btnElement.style.cssText = 'font-size: 32px; color: red; border: 3px solid'

console.dir(btnElement)

/**
 * TODO: Cho sẵn bảng giỏ hàng.
 * Yêu cầu sử dụng JavaScript để tô nền cho các dòng trong bảng có số thứ tự chẵn thành màu "#ccc"
 *
 * Tư duy:
 *
 * - Lấy nhiều, loại <tr> ở phần <thead>
 *
 */

const trElementsEven = document.querySelectorAll('tbody > tr:nth-child(even)')

trElementsEven.forEach((item) => {
  item.style.backgroundColor = '#ccc'
})
