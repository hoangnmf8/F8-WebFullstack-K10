const f8AnchorElement = document.getElementsByTagName('a')[0]

// console.log(f8AnchorElement.href)
// console.log(f8AnchorElement.title = "Học lập trình để kiếm tiền")
// console.log(f8AnchorElement.className)
// console.log(f8AnchorElement.style)
// console.log(f8AnchorElement.style.backgroundColor)

/**
 * Cách 1: Truy xuất trực tiếp thuộc tính có sẵn thông quan Element Node.
 */

f8AnchorElement.setAttribute('abc', 'Nội dung của thuộc tính abc')

// console.log(f8AnchorElement.getAttribute("abc"))
// f8AnchorElement.removeAttribute("abc")
// console.log(f8AnchorElement.getAttribute("abc"))

// console.log(f8AnchorElement.attributes)

for (let i = 0; i < f8AnchorElement.attributes.length; i++) {
  // console.log(f8AnchorElement.attributes[i])
  console.log(`Thuoc tinh ${f8AnchorElement.attributes[i].name} có giá trị ${f8AnchorElement.attributes[i].nodeValue}`)
}
