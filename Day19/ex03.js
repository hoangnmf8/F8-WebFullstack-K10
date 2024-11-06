// function Person(email, name, age, password, course) {
//   this.email = email
//   this.name = name
//   this.age = age
//   this.password = password
//   this.course = course
//   this.learn = function() {
//     console.log(`${this.name} learning ${this.course} `)
//   }
// }


// class Person {
//   constructor(email, name, age, password, course) {
//     this.email = email
//     this.name = name
//     this.age = age
//     this.password = password
//     this.course = course
//     this.learn = function () {
//       console.log(`${this.name} learning ${this.course} `)
//     }
//   }
// }

// const newUser = new Person("hoang@gmail.com", "Hoang", 32, "123", "JS F8")
// console.log(newUser)
// newUser.learn()

function CreateUserCart(userId) {
  /**
   * Tao ham createUserCart theo userId của người dùng:
   * - products là danh sách sản phẩm người dùng mua
   * - userId là id của người dùng sở hữu giỏ hàng
   * - phương thức thêm sản phẩm vào giỏ hàng: addProduct
   * - phương thức showCart: trả về mảng sản phẩm và quantity của sản phẩm trong giỏ hàng.
   * - phương thức showTotal: trả về tổng tiền của giỏ hàng.
   */

  this.products = []
  this.userId = userId
  this.total = 0
  this.addProduct = function(product) {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa?
    const existingProduct = this.products.find(item => item.id === product.id)
    if(existingProduct) {
      // Nếu đã tồn tại, cập nhật lại quantity cho sản phẩm đó.
      existingProduct.quantity += product.quantity
      if(product.quantity < 0) {
        // Trường hợp bớt.
      }
    } else {
      // Nếu chưa tồn tại, thêm sản phẩm kèm số lượng vào products
      this.products.push(product)
    }
  }

  this.removeProduct = function(productId) {
    this.products = this.products.filter(item => item.id !== productId)
  }

  this.showCart = function() {
    return this.products
  }

  this.showTotal = function() {
    return this.products.reduce((currentvalue, initialValue) => {
      return currentvalue += initialValue.quantity * initialValue.price 
    }, 0)
  }

  // this.showTotal = function() {
  //   if(this.products.length === 0) {
  //     return 0
  //   } else {
  //     for(let i = 0; i< this.products.length; i++) {
  //       total += this.products[i].price * this.products[i].quantity
  //     }
  //     return total
  //   }
  // }
}

const cartOfHoang = new CreateUserCart("123")

cartOfHoang.addProduct({id: 1, title: "tivi samsung", price: 200, quantity: 2})

cartOfHoang.addProduct({id: 1, title: "tivi samsung", price: 200, quantity: 1})

cartOfHoang.addProduct({id: 2, title: "tivi sony", price: 300, quantity: 5})

console.log(cartOfHoang.showTotal())

console.log(cartOfHoang.showCart()) // [danh sach chua san pham cua user da mua]

