/**
 * ## Bài 5 (2 điểm): Chuyển mảng sau thành dạng thẻ `select` trong HTML và đưa ra ngoài màn hình.

```javascript

const categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      {
        id: 4,
        name: "Chuyên mục 2.1",
      },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          {
            id: 10,
            name: "Chuyên mục 2.2.1",
          },
          {
            id: 11,
            name: "Chuyên mục 2.2.2",
          },
          {
            id: 12,
            name: "Chuyên mục 2.2.3",
          },
        ],
      },
      {
        id: 6,
        name: "Chuyên mục 2.3",
      },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      {
        id: 7,
        name: "Chuyên mục 3.1",
      },
      {
        id: 8,
        name: "Chuyên mục 3.2",
      },
      {
        id: 9,
        name: "Chuyên mục 3.3",
      },
    ],
  },
]
```

**Kết quả kỳ vọng:**

```html
  <select>
    <option value="1">Chuyên mục 1</option>
    <option value="2">Chuyên mục 2</option>
    <option value="4">-- Chuyên mục 2.1</option>
    <option value="5">-- Chuyên mục 2.2</option>
    <option value="10">---- Chuyên mục 2.2.1</option>
    <option value="11">---- Chuyên mục 2.2.2</option>
    <option value="12">---- Chuyên mục 2.2.3</option>
    <option value="6">-- Chuyên mục 2.3</option>
    <option value="3">Chuyên mục 3</option>
    <option value="7">-- Chuyên mục 3.1</option>
    <option value="8">-- Chuyên mục 3.2</option>
    <option value="9">-- Chuyên mục 3.3</option>
  </select>
```

**Cách tính điểm:**

- Đúng và đủ giá trị cho thuộc tính `value` trong thẻ `option`(0.5đ).
- Thêm được chính xác chuỗi "--" để phân biệt các cấp cho chuyên mục con (0.5đ).
- Sắp xếp đúng thứ tự các chuyên mục và các chuyên mục con(0.5đ).
- Khi số lượng cấp độ chuyên mục con tăng hoặc giảm thì vẫn hiển thị đúng thứ tự (0.5đ).
*/

const categories = [
  {
    id: 1,
    name: 'Chuyên mục 1',
  },
  {
    id: 2,
    name: 'Chuyên mục 2',
    children: [
      {
        id: 4,
        name: 'Chuyên mục 2.1',
      },
      {
        id: 5,
        name: 'Chuyên mục 2.2',
        children: [
          {
            id: 10,
            name: 'Chuyên mục 2.2.1',
          },
          {
            id: 11,
            name: 'Chuyên mục 2.2.2',
          },
          {
            id: 12,
            name: 'Chuyên mục 2.2.3',
          },
        ],
      },
      {
        id: 6,
        name: 'Chuyên mục 2.3',
      },
    ],
  },
  {
    id: 3,
    name: 'Chuyên mục 3',
    children: [
      {
        id: 7,
        name: 'Chuyên mục 3.1',
      },
      {
        id: 8,
        name: 'Chuyên mục 3.2',
      },
      {
        id: 9,
        name: 'Chuyên mục 3.3',
      },
    ],
  },
]

/**
 * Bước 1: Làm phẵng dữ liệu và thêm level cho các chuyên mục.
 * Bước 2: Tạo vòng lặp sửa name bằng cách thêm "--" theo level.
 * Bước 3: Xử lý chuỗi
 */

const queue = categories.map((item) => ({ ...item, level: 0 }))

let result = []
while (queue.length > 0) {
  let item = queue.shift()
  result.push(item)
  if (item.children) {
    const childrenArr = item.children.map((child) => {
      console.log(item)
      return {
        ...child,
        level: item.level + 1,
      }
    })
    queue.unshift(...childrenArr)
  }
}

let content = result.map((item) => {
  // Cách 1:
  // for (let i = 0; i < item.level; i++) {
  // 	item.name = "--" + item.name;
  // }

  // Cách 2:
  let maker = ''

  maker = maker.padStart(item.level * 2, '--')
  console.log(maker)

  if (maker !== '') {
    item.name = maker + ' ' + item.name
  }

  return item
})

content = `<select>${content
  .map((item) => {
    return `<option value="${item.id}">${item.name}</option>`
  })
  .join('')}</select>`

document.write(content)
