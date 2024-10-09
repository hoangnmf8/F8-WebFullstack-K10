const cart = [
  {
    id: 1,
    name: 'T-Shirt',
    price: 100000,
    quantity: 2,
    hotSale: false,
  },
  {
    id: 2,
    name: 'Jean',
    price: 300000,
    quantity: 1,
    hotSale: false,
  },
  {
    id: 3,
    name: 'Skirt',
    price: 150000,
    quantity: 3,
    hotSale: true,
  },
  {
    id: 4,
    name: 'Shirt',
    price: 140000,
    quantity: 2,
    hotSale: false,
  },
  {
    id: 5,
    name: 'Jacket',
    price: 250000,
    quantity: 1,
    hotSale: true,
  },
]

/**
 * * Xây dựng hàm `renderOrder(cart)` nhận vào thông tin giỏ hàng và và đưa thông tin ra màn hình theo yêu cầu
sau:

** - Tạo một bảng thông tin giỏ hàng với các cột: `Tên sản phẩm`, `Đơn giá`, `Số lượng`, `Thành tiền` cho từng sản phẩm.
** - Tính tổng số tiền của giỏ hàng và hiển thị ở cuối bảng.
** - Thiết lập `color: red` cho sản phẩm có thuộc tính `hotSale` là `true` (sử dụng JavasSript).
 */

function renderOrder(cart) {
  let table = /*html*/ `<table>
  <thead>
    <tr>
      <th>Tên sản phẩm</th>
      <th>Đơn giá</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
    </tr>
  </thead>
  <tbody>`

  let total = 0

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity
    total += itemTotal

    const style = item.hotSale ? 'style="color: red"' : ''

    table += `
    <tr ${style}>
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>${itemTotal}</td>
    </tr>
    `
  })
  table += `
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">Tổng tiền</td>
          <td>${total}</td>
        </tr>
      </tfoot>
    </table>
    `
  return table
}

const cartElement = document.getElementById('cart')

cartElement.innerHTML = renderOrder(cart)
