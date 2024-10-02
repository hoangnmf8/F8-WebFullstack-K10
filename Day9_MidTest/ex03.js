/**
 * ## Bài 3 (3 điểm): Tìm và đánh dấu keyword trong câu.

Hàm `highlightKeyword(content, keyword)` nhận vào 2 tham số `content` và `keyword` và trả về nội dung với tất cả các `keyword` được bôi đậm bằng cách thêm thẻ `<strong>` vào trước và sau `keyword`.

- Thêm được thẻ `strong` vào trước và sau `keyword`. (1.5đ)
- Nếu không tìm được `keyword` trong `content` thì trả về `content` ban đầu. (0.5đ)
- Không phân biệt chữ hoa, chữ thường. (0.5đ)
- `highight` được hết các `keyword` trong content. (0.5đ)

**Ví dụ:**

```javascript
highlightKeyword("Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?", "thú vị");

// Kết quả kỳ vọng: "Học lập trình tại F8 rất <strong>thú vị</strong>, bạn có biết điều gì <strong>THÚ VỊ</strong> hơn không?"
```
 */

/**
 * Bước 1: Làm sạch dữ liệu -> toLowerCase
 * Bước 2: Tìm index của keyword -> indexOf
 * Bước 3: Tạo vòng lặp, mỗi lần lặp bỏ qua cái keyword đã được xử lý.
 * Bước 4: Nối chuỗi vào biến result.
 */

function highlightKeyword(content, keyword) {
	let lowerContent = content.toLowerCase();
	let lowerKeyword = keyword.toLowerCase();
	let index = lowerContent.indexOf(lowerKeyword);
	if (index === -1) {
		return content;
	}
	let result = "";

	while (index !== -1) {
		result += content.slice(0, index);
		result += "<strong>" + content.slice(index, index + keyword.length) + "</strong>";
		content = content.slice(index + keyword.length);
		lowerContent = content.toLowerCase();
		index = lowerContent.indexOf(lowerKeyword);
	}
	result += content;
	return result;
}

console.log(highlightKeyword("Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?", "thú vị"));
