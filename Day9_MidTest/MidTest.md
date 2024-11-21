**Yêu cầu:**

- Học viên tạo mới 1 folder trống ngay tại lớp (không được tạo trước ở nhà).
- Học viên tạo 1 file `index.html` và 5 file `ex01.js`, `ex02.js`, `ex03.js`, `ex04.js`, `ex05.js` tương ứng với 5 bài
  tập trong folder vừa tạo.
- Học viên đưa toàn bộ source code bài làm lên Git và nộp link bài làm với form nộp bài:
  [Form Nộp Bài](https://forms.gle/UpngJi12knAVj6VQA).
- Những bài có commit trễ (commit sau deadline) sẽ bị huỷ toàn bộ kết quả bài làm và nhận 0 điểm.

## Bài 1 (1 điểm): Viết hàm tính tiền taxi.

Hàm `taxiFare(km)` nhận vào số km và trả về số tiền phải trả dựa trên các quy tắc sau:

- Trả về "Invalid" nếu km không phải là số hợp lệ hoặc là số âm. (0.25đ)
- Giá mở cửa 1km đầu tiên (giá mở cửa tức là trong khoảng 1km đầu đều mất cùng 1 số tiền): 5000đ. (0.25đ)
- Lớn hơn 1 km đến km thứ 30: 4000đ/km. (0.25đ)
- Lớn hơn km thứ 30: 3000đ/km. (0.25đ)

## Bài 2 (2 điểm): Viết hàm kiểm tra 1 số:

Hàm `checkNumber(n)` nhận vào số n thực hiện yêu cầu sau:

- Trả về "Chia hết cho 3" nếu n chia hết cho 3. Trả về "Chia hết cho 5" nếu n chia hết cho 5. (0.5đ)
- Trả về "Chia hết cho cả 3 số 3, 5 và 15" nếu n chia hết cho cả 3 số 3, 5 và 15. (0.5đ)
- Trả về "Invalid" nếu n không phải là số hợp lệ. (0.5đ)
- Trả về "Không chia hết" cho tất cả các trường hợp khác. (0.5đ)

**Kết quả kỳ vọng:**

```javascript
console.log(checkNumber(15)); // "Chia hết cho cả 3 số: 3, 5 và 15"
console.log(checkNumber(9)); // "Chia hết cho 3"
console.log(checkNumber(10)); // "Chia hết cho 5"
console.log(checkNumber("15")); // "Invalid"
console.log(checkNumber(11)); // "Không chia hết"
```

## Bài 3 (3 điểm): Tìm và đánh dấu keyword trong câu.

Hàm `highlightKeyword(content, keyword)` nhận vào 2 tham số `content` và `keyword` và trả về nội dung với tất cả các `keyword` được bôi đậm bằng cách thêm thẻ `<strong>` vào trước và sau `keyword`.

- Thêm được thẻ `strong` vào trước và sau `keyword`. (0.5đ)
- Nếu không tìm được `keyword` trong `content` thì trả về `content` ban đầu. (0.5đ)
- Không phân biệt chữ hoa, chữ thường. (0.5đ)
- Nếu có nhiều `keyword` cần `highight` được hết các `keyword` trong content. (1đ)
- Nếu dữ liệu nhập vào không phải là chuỗi thì trả về `Invalid`. (0.5đ)

**Ví dụ:**

```javascript
highlightKeyword("Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?", "thú vỊ");

// Kết quả kỳ vọng: "Học lập trình tại F8 rất <strong>thú vị</strong>, bạn có biết điều gì <strong>THÚ VỊ</strong> hơn không?"
```

## Bài 4 (2 điểm): Đưa thông tin dạng bảng sản phẩm ra màn hình.

- Sử dụng kiến thức xử lý mảng để đưa dữ liệu có sẵn bao gồm `id, name, price, brand` ra màn hình hiển thị. (0.5đ)
- Danh sách hiển thị phải là dạng bảng HTML hợp lệ. (0.5đ)
- Khi không có sản phẩm nào thì trả về `Không có sản phẩm nào`, khi dữ liệu nhập vào không phải là mảng thì trả về `Invalid`. (0.5đ)
- Đếm số lượng sản phẩm và hiển thị ở cuối bảng. (0.5đ)

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
	<tfoot>
		<tr>
			<td colspan="3">Tổng sản phẩm</td>
			<td>3</td>
		</tr>
	</tfoot>
</table>
```

## Bài 5 (2 điểm): Chuyển mảng sau thành dạng thẻ `select` trong HTML và đưa ra ngoài màn hình.

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
];
```

**Kết quả kỳ vọng:**

```html
<select>
	<option value="1">Chuyên mục 1</option>
	<option value="2">Chuyên mục 2</option>
	<option value="4">|--Chuyên mục 2.1</option>
	<option value="5">|--Chuyên mục 2.2</option>
	<option value="10">|--|--Chuyên mục 2.2.1</option>
	<option value="11">|--|--Chuyên mục 2.2.2</option>
	<option value="12">|--|--Chuyên mục 2.2.3</option>
	<option value="6">|--Chuyên mục 2.3</option>
	<option value="3">Chuyên mục 3</option>
	<option value="7">|--Chuyên mục 3.1</option>
	<option value="8">|--Chuyên mục 3.2</option>
	<option value="9">|--Chuyên mục 3.3</option>
</select>
```

**Cách tính điểm:**

- Đúng và đủ giá trị cho thuộc tính `value` trong thẻ `option`(0.5đ).
- Thêm được chính xác chuỗi "|--" để phân biệt các cấp cho chuyên mục con (0.5đ).
- Sắp xếp đúng thứ tự các chuyên mục và các chuyên mục con(0.5đ).
- Khi số lượng cấp độ chuyên mục hoặc các chuyên mục con tăng hoặc giảm thì vẫn hiển thị đúng thứ tự (0.5đ).
