/**
 * ## Bài 4 (2 điểm): Đưa thông tin dạng bảng sản phẩm ra màn hình.

- Yêu cầu đầy đủ các thông tin: `id, name, price, brand`. (1.5đ) (Thiếu một trong các thông tin trên sẽ bị trừ 0.5đ)
- Danh sách hiển thị phải là dạng bảng HTML. (0.5đ)

```javascript
const products = [
  {
    id: 1,
    name: "Iphone 12",
    price: 1000,
    brand: "Apple",
  },
  {
    id: 2,
    name: "Galaxy S21",
    price: 900,
    brand: "Samsung",
  },
  {
    id: 3,
    name: "Xperia 1",
    price: 800,
    brand: "Sony",
  },
];
```

**Kết quả kỳ vọng:**

```html
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Brand</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Iphone 12</td>
        <td>1000</td>
        <td>Apple</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Galaxy S21</td>
        <td>900</td>
        <td>Samsung</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Xperia 1</td>
        <td>800</td>
        <td>Sony</td>
      </tr>
    </tbody>
  </table>
```
 */

const products = [
  {
    id: 1,
    name: 'Iphone 12',
    price: 1000,
    brand: 'Apple',
  },
  {
    id: 2,
    name: 'Galaxy S21',
    price: 900,
    brand: 'Samsung',
  },
  {
    id: 3,
    name: 'Xperia 1',
    price: 800,
    brand: 'Sony',
  },
]

const result = products
  .map((item) => {
    return `<tr>
					<td>${item.id}</td>
					<td>${item.name}</td>
					<td>${item.price}</td>
					<td>${item.brand}</td>
				</tr>`
  })
  .join('')

const content = `
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Brand</th>
      </tr>
    </thead>
    <tbody>
      ${result}
    </tbody>
  </table>
`

document.write(content)
