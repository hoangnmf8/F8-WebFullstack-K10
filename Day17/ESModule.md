## Tổng quan về ES Module

### Lịch sử phát triển

Trong ES6 (ECMAScript 2015), modules là một tính năng quan trọng giúp tổ chức mã nguồn thành các phần nhỏ gọn, dễ quản lý và tái sử dụng. Module ES6 cho phép tách biệt các phần của ứng dụng và chia sẻ mã giữa các file một cách rõ ràng. Dưới đây là mọi điều bạn cần biết về module trong ES6:

- Trước ES6, JavaScript không có hệ thống module chuẩn. Các thư viện như **CommonJS (sử dụng trong Node.js)** và **AMD (Asynchronous Module Definition)** được tạo ra để khắc phục điều này.

- ES6 modules giới thiệu một hệ thống module chuẩn, hỗ trợ trong cả môi trường trình duyệt và Node.js (với sự hỗ trợ qua file .mjs hoặc cờ --experimental-modules).

### Đặc điểm chính

- **Scope riêng biệt:** Mỗi module có một phạm vi riêng. Các biến, hàm, hoặc lớp trong một module không xung đột với các biến trong module khác hoặc trong phạm vi toàn cục, trừ khi chúng được xuất ra (export).
- **Strict mode:** Mặc định, tất cả các module ES6 hoạt động trong chế độ strict mode ("use strict"), giúp phát hiện nhiều lỗi tiềm ẩn và đảm bảo cú pháp chặt chẽ.
- **Chỉ được phép nhập/ xuất (import/export) ở mức cao nhất:** Bạn chỉ có thể sử dụng từ khóa import và export bên ngoài các khối lệnh (không thể đặt chúng bên trong if, while, hay các khối lệnh khác).

---

## Điều kiện sử dụng ES Module

- **Môi trường hỗ trợ:** ES6 modules được hỗ trợ trong tất cả các trình duyệt hiện đại (Chrome, Firefox, Safari, Edge, Opera) và Node.js từ phiên bản 12 trở lên.
- Khi khai báo một module hoặc một dự án cần sử dụng `type="module"` trong thẻ `<script>`.

```html
<script type="module" src="./math.js"></script>
<script type="module" src="./main.js"></script>
```

---

## Cú pháp Export

`export` là cú pháp dùng để xuất một hoặc nhiều biến, hàm, class từ một module ra ngoài để các module khác có thể sử dụng.

Có nhiều cách để `export`, sau đây là các cách phổ biến:

### Named Export (xuất theo tên trên cùng dòng khai báo)

`export` theo tên có thể áp dụng nhiều lần trong cùng một file.

```javascript
// math.js
export const PI = 3.14159;
export function add(x, y) {
	return x + y;
}

// main.js
import { PI, add } from "./math.js";
console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
```

### Export All (xuất tất cả)

Thay vì `export` theo từng phần tử, người ta cũng có thể gom tất cả các phần tử vào một object rồi xuất ra.

```javascript
// module.js
const a = 10;
const b = 20;
export { a, b };
```

### Đổi tên khi `export`

Đôi khi chúng ta muốn đổi tên biến trước khi export, ta có thể sử dụng cú pháp `{ oldName as newName }`.

```javascript
export { PI as piValue };
```

### Export Default (Xuất mặc định)

Xuất mặc định được áp dụng duy nhất 1 lần cho 1 file, và không cần phải sử dụng dấu ngoặc nhọn `{}` khi import.

```javascript
// math.js
const PI = 3.14159;
export default PI;
```

Khi xuất mặc định, import không cần dấu `{}`:

```javascript
// main.js
import PI from "./math.js";
console.log(PI); // 3.14159
```

Bạn không thể sử dụng cú pháp `export default` trực tiếp với một biểu thức khai báo biến như `const`, `let`, hoặc `var`. Nguyên nhân là vì export default yêu cầu một giá trị, một biểu thức hoặc một khai báo có thể được xuất ngay lập tức, trong khi khai báo với const cần được thực hiện tách biệt.

```javascript
export default const add = function(x, y) {
  return x + y;
}
// Error: Expression expected.

export default const a = 10
// Error: Expression expected.
```

Tuy nhiên bạn vẫn có thể export default cho một decralation hoặc expression function:

```javascript
export default function sum(a, b) {
  return a + b;
}
// Đúng

export default function (x, y) {
  return x + y;
}

// Đúng
```

Khi xuất mặc định, ta có thể đổi tên tuỳ ý khi import:

```javascript
import tong, { PI, add, a } from "./math.js";
console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(a);
console.log(tong(1, 2));

// Lưu ý khi export ta đặt tên hàm là `sum` nhưng khi import ta gọi tên là `tong` và vẫn hoạt động bình thường
```

Khi export mặc định, khai báo mặc định không được để sau các import khác, import mặc định luôn phải đặt đầu tiên nếu có nhiều biến cùng export từ 1 file:

```javascript
import { PI, add, a } , sum from './math.js';
// sai: Uncaught SyntaxError: Unexpected token ','
```

---

## Cú pháp Import

`import` là cú pháp dùng để nhập một hoặc nhiều biến, hàm, class từ một module khác vào module hiện tại.

### Import Named

```javascript
import { PI, add } from "./math.js";
console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
```

### Import All

```javascript
import * as math from "./math.js";
console.log(math.PI); // 3.14159
console.log(math.add(2, 3)); // 5
```

Với `import all`, tất cả các phần tử được import sẽ được gom vào một object với tên mà bạn chọn (thường thì để dễ quản lý, người ta đặt trùng với tên file và chức năng chung của file).

### Import Default

```javascript
import PI from "./math.js";
console.log(PI); // 3.14159
```

Như tìm hiểu ở phía trên, `import default` không cần dấu `{}` và có thể đổi tên tuỳ ý khi import.

### Đổi tên khi import

```javascript
import { PI as piValue, add as addValue } from "./math.js";
console.log(piValue); // 3.14159
```

### Import không cần tên

Đôi khi bạn chỉ muốn chạy module mà không cần sử dụng gì từ đó, chỉ cần gọi nó.

```javascript
import "./side-effects.js";
```

Cách này thường được sử dụng khi chúng ta muốn nạp một module chỉ để chạy các side effects toàn cục hoặc nạp CSS module (ví dụ: thêm sự kiện, thay đổi DOM, gọi API, ...).

## Re-export (xuất lại)

Re-export là cách import và export cùng 1 dòng, giúp giảm số lượng dòng code và dễ quản lý.

```javascript
// math.js
export const PI = 3.14159;
export function add(x, y) {
	return x + y;
}

// main.js
export { PI, add } from "./math.js";
```

Trong ví dụ trên, file main.js đóng vai trò trung gian, `import` các phần tử từ file `math.js` rồi `export` lại ra ngoài cho file khác sử dụng, đảm bảo sự rõ ràng và dễ quản lý.

---

## Dynamic Import

Dynamic `import` cho phép bạn `import` module trong thời gian chạy, giúp tối ưu hiệu suất và giảm thời gian tải trang.

```javascript
const modulePath = "./math.js";
import(modulePath).then((module) => console.log(module.PI));
```

Thực tế khi chúng ta sử dụng `import` thì các `module` sẽ được tải cùng lúc với file chính, nhưng khi sử dụng `import()` thì `module` sẽ được tải khi cần thiết, giúp giảm thời gian tải trang.

---

## Sự khác biệt giữa ES6 Module và CommonJS

### ES6 Module

- **Phạm vi riêng biệt:** Mỗi module có phạm vi riêng, không xung đột với các biến, hàm, lớp trong module khác.
- **Chế độ strict:** Mặc định, tất cả các module ES6 hoạt động trong chế độ strict mode.
- **Chỉ được phép import/export ở mức cao nhất:** Không thể sử dụng import/export bên trong các khối lệnh.
- **Tải module theo thứ tự:** Các module được tải theo thứ tự khai báo, giúp tránh lỗi phụ thuộc.
- **Dynamic import:** Hỗ trợ dynamic import giúp tối ưu hiệu suất.

### CommonJS

- **Phạm vi toàn cục:** Các biến, hàm, lớp được import từ module CommonJS sẽ được thêm vào phạm vi toàn cục.
- **Không chế độ strict:** CommonJS không hoạt động trong chế độ strict mode.
- Còn nhiều đặc thù của CommonJS nhưng hiện nay với những ưu điểm mà ES Module (ESM) mang lại, CommonJS dần dần bị thay thế nên chúng ta không cần quan tâm quá nhiều đến CommonJS.
