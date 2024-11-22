// const myDocument = {
//   html: {
//     head: {
//       title: {
//         text: "HTML DOM"
//       }
//     },

//     body: {
//       h1: {
//         text: "HTML DOM"
//       },

//       p: {
//         text: "HTML DOM là một mô hình hoá dạng đối tượng của một tài liệu HTML."
//       }
//     }
//   }
// }

// console.log(myDocument)
// console.log({document})

// console.log(document.getElementsByTagName("h2")[2])

/**
 * getElementsByTagName("tagname")
 * - Luôn trả về một HTMLCollection
 * - Phương thức truy xuất theo tên thẻ.
 */

// let section2Element = document.getElementById("section-2")
// console.log(section2Element)

/**
 * getElementById("id")
 * - Trả về phần tử HTML đầu tiên có id được truyền vào.
 */

// console.log(document.getElementsByClassName("section-3"))

/**
 * getElementsByClassName("className")
 * - Luôn trả về HTMLCollection.
 */

/**
 * querySelector("selectorName")
 * - Trả về phần tử đầu tiên thoả mãn "selectorName".
 * - Nếu không tìm được thì trả về "null"
 *
 * querySelectorAll("selectorName")
 * - Luôn trả về 1 NodeList (danh sách các node ở trong DOM).
 */

// console.log(document.querySelector("p.paragraph"))

/**
 * TODO: Lấy phần tử <p> cuối cùng là con của phần tử <div> đầu tiên tìm thấy trong document.
 */

// console.log(document.querySelector("div > p.paragraph:last-child"))

// console.log(document.querySelectorAll("div > p.paragraph"))

/**
 * TODO: Lấy ra tất cả các phần tử là thẻ p trong thẻ div nhưng thẻ p đó có số thứ tự với cùng loại thẻ p là vị trí lẻ.
 */

// console.log(document.querySelectorAll("div > p:nth-child(odd)"))

// console.log(document.querySelectorAll("div > p:nth-child(2n+1)"))

// odd: lẻ
// even: chẵn

let oddElement = document.querySelectorAll('div > p:nth-child(odd)')

// for(let i = 0; i < oddElement.length; i++) {
//   console.log(`Phần tử ${i}: `, oddElement[i])
// }

// oddElement.forEach((item, index)=>{
//   console.log(`phần tử ${index} là: ${item[index]}`)
// })

console.log(Array.isArray(oddElement))
console.log(typeof oddElement)

/**
 * NodeList không phải là array.
 */

/**
 *
 */

let pElements = document.getElementsByTagName('p')
console.log(pElements)
