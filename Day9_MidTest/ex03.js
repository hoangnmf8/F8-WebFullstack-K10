// Bài 3 (3 điểm): Tìm và đánh dấu keyword trong câu.
// Hàm highlightKeyword(content, keyword) nhận vào 2 tham số content và keyword và trả về nội dung với tất cả các keyword được bôi đậm bằng cách thêm thẻ <strong> vào trước và sau keyword.

// Thêm được thẻ strong vào trước và sau keyword. (1đ)
// Nếu không tìm được keyword trong content thì trả về content ban đầu. (0.5đ)
// Không phân biệt chữ hoa, chữ thường. (0.5đ)
// Không highight hết các keyword trong content. (0.5đ)
// Ví dụ:
// highlightKeyword("Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?", "thú vị");
// Kết quả kỳ vọng: "Học lập trình tại F8 rất <strong>thú vị</strong>, bạn có biết điều gì <strong>THÚ VỊ</strong> hơn không?"
function highlightKeyword(content, keyword) {
  if (typeof content !== 'string' || typeof keyword !== 'string') {
    return content
  }
  const regex = new RegExp(keyword, 'gi')
  return content.replace(regex, '<strong>$&</strong>')
}
console.log(highlightKeyword('Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?', 'thú vị'))
