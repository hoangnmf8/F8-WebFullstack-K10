## Bài 1: Xây dựng hàm tạo menu từ dữ liệu cho trước

**Dữ liệu cho trước:**

```javascript
const menu = [
  {
    id: 1,
    name: 'Home',
    parentId: 0,
  },
  {
    id: 2,
    name: 'About',
    parentId: 0,
  },
  {
    id: 3,
    name: 'News',
    parentId: 0,
  },
  {
    id: 4,
    name: 'Products',
    parentId: 0,
  },
  {
    id: 5,
    name: 'Contact',
    parentId: 0,
  },
  {
    id: 6,
    name: 'T-Shirt',
    parentId: 4,
  },
  {
    id: 7,
    name: 'Jean',
    parentId: 4,
  },
  {
    id: 8,
    name: 'Skirt',
    parentId: 4,
  },
]
```

**Yêu cầu:**

- Xây dựng hàm tạo menu từ dữ liệu cho trước. `parentId` là id của menu cha. Nếu `parentId` là 0 thì đó là menu chính,
  ngược lại là menu con.
- Thay đổi font-size là 24px cho menu chính và font-size là 20px cho menu con bằng JavaScript.

**Kết quả kỳ vọng:**

```html
<ul id="main-menu">
  <li>
    <a href="#">Home</a>
  </li>
  <li>
    <a href="#">About</a>
  </li>
  <li>
    <a href="#">News</a>
  </li>
  <li>
    <a href="#">Products</a>
    <ul>
      <li>
        <a href="#">T-Shirt</a>
      </li>
      <li>
        <a href="#">Jean</a>
      </li>
      <li>
        <a href="#">Skirt</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Contact</a>
  </li>
</ul>
```

## Bài 2: Hoàn thiện thông tin giỏ hàng từ dữ liệu cho trước.

**Dữ liệu cho trước:**

```javascript
const cart = [
  {
    id: 1,
    name: 'T-Shirt',
    price: 100000,
    quantity: 2,
    hotSale: false
  },
  {
    id: 2,
    name: 'Jean',
    price: 200000,
    quantity: 1,
    hotSale: false
  },
  {
    id: 3,
    name: 'Skirt',
    price: 150000,
    quantity: 3
    hotSale: true
  },
  {
    id: 4,
    name: 'Shirt',
    price: 120000,
    quantity: 2,
    hotSale: false
  },
  {
    id: 5,
    name: 'Jacket',
    price: 250000,
    quantity: 1,
    hotSale: true
  }
];
```

**Yêu cầu:** Xây dựng hàm `renderOrder(cart)` nhận vào thông tin giỏ hàng và và đưa thông tin ra màn hình theo yêu cầu
sau:

- Tạo một bảng thông tin giỏ hàng với các cột: `Tên sản phẩm`, `Đơn giá`, `Số lượng`, `Thành tiền` cho từng sản phẩm.
- Tính tổng số tiền của giỏ hàng và hiển thị ở cuối bảng.
- Thiết lập `color: red` cho sản phẩm có thuộc tính `hotSale` là `true` (sử dụng JavasSript).

**Kết quả kỳ vọng:**

```html
<table>
  <thead>
    <tr>
      <th>Tên sản phẩm</th>
      <th>Đơn giá</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>T-Shirt</td>
      <td>100000</td>
      <td>2</td>
      <td>200000</td>
    </tr>
    <tr>
      <td>Jean</td>
      <td>200000</td>
      <td>1</td>
      <td>200000</td>
    </tr>
    <tr>
      <td>Skirt</td>
      <td>150000</td>
      <td>3</td>
      <td>450000</td>
    </tr>
    <tr>
      <td>Shirt</td>
      <td>120000</td>
      <td>2</td>
      <td>240000</td>
    </tr>
    <tr>
      <td>Jacket</td>
      <td>250000</td>
      <td>1</td>
      <td>250000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Tổng tiền</td>
      <td>1340000</td>
    </tr>
  </tfoot>
</table>
```

## Bài 3: Đếm số lượng phần tử trên một trang web.

**Yêu cầu:** Xây dựng hàm `countElements(tagName)` trả về số lượng phần tử của một thẻ HTML trên một trang web.

```javascript
function countElements(tagName) {
  // Your code here
}
// Giả sử trên trang web có 10 thẻ div và 5 thẻ p

console.log(countElements('div')) // 10
console.log(countElements('p')) // 5
```
