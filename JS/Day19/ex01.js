function sum() {
  let total = 0
  console.log(typeof arguments)
  console.log(Array.isArray(arguments))
  for(let i = 0; i < arguments.length; i++){
    total += arguments[i]
  }
  return total
}

console.log(sum(1,2,3))

console.log(1, "Hello", {name: "Hoang"})

/**
 * Tham số là các biến được khai báo trong lời khai báo hàm, dùng để giữ chỗ (placeholder) cho các giá trị khi truyền vào hàm.
 * 
 * Đối số là giá trị được truyền vào hàm (parameters)
 * 
 * Có thể truyền đối số bằng toán tử "rest"
 * 
 * Toán tử rest gom những tham số còn lại của hàm thành một array
 * 
 * Argument gom tất cả các đối số được truyền vào hàm thành một object đặc biệt
 */

function sum2(a, ...rest) {
  console.log(Array.isArray(rest))
  console.log(rest)
}

sum2(1,2,3)

const sum = function(a, b) {
  return a + b;
};

export default sum