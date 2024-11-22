const h2Element = document.getElementsByTagName('h2')[0]
console.log(h2Element.innerText)

// get: lấy ra thông tin innerText.
// set: thay đổi innerText.

// h2Element.innerText = "Hello, F8!"

/**
 * Yêu cầu:
 * - Lấy ra phần tử ul.
 * - Lấy ra innerText của ul.
 */

const productListElement = document.getElementsByTagName('ul')[0]

// console.log(productListElement.innerText)

h2Element.outerText = 'Hello, F8!'

let div = document.getElementById('example')

console.log(div.innerText)
console.log(div.textContent)

console.log(productListElement.innerHTML)
console.log(productListElement.outerHTML)
console.log(typeof productListElement.outerHTML)
