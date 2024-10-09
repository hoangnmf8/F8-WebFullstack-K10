/**
 * ## Bài 1 (1 điểm): Viết hàm tính tiền taxi.

Hàm `taxiFare(km)` nhận vào số km và trả về số tiền phải trả dựa trên các quy tắc sau:
  - Trả về "Invalid" nếu km không phải là số hợp lệ hoặc là số âm. (0.25đ)
  - 1 km đầu tiên: 5000đ. (0.25đ)
  - Lớn hơn 1 km đến km thứ 30: 4000đ/km. (0.25đ)
  - Lớn hơn km thứ 30: 3000đ/km. (0.25đ)
 */

function taxiFare(km) {
  if (typeof km !== 'number' || Number.isNaN(km) || km < 0) return 'Invalid'

  if (km <= 1) return 5000
  if (km <= 30) return 5000 + (km - 1) * 4000
  return 5000 + 29 * 4000 + (km - 30) * 3000
}

console.log(taxiFare(0.5))
console.log(taxiFare(2))
console.log(taxiFare(29))
console.log(taxiFare(40))
console.log(taxiFare(-1))
console.log(taxiFare(NaN))
