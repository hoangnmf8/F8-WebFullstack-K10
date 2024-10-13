## Bài 1: Cho danh sách slide sau:

```javascript
const dataSlide = [
  {
    id: 1,
    title: 'Slide 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nunc.',
    image: 'https://placehold.co/800x400?text=Slide+1',
  },
  {
    id: 2,
    title: 'Slide 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ratione?',
    image: 'https://placehold.co/800x400?text=Slide+2',
  },
  {
    id: 3,
    title: 'Slide 3',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam.',
    image: 'https://placehold.co/800x400?text=Slide+3',
  },
  {
    id: 4,
    title: 'Slide 4',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, illum?',
    image: 'https://placehold.co/800x400?text=Slide+4',
  },
  {
    id: 5,
    title: 'Slide 5',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, magnam.',
    image: 'https://placehold.co/800x400?text=Slide+5',
  },
]
```

**Yêu cầu:**

- Xây dựng giao diện slide show dựa trên dữ liệu cho trước (khi số lượng slide thay đổi, giao diện vẫn hoạt động đúng).
- Mỗi slide bao gồm: hình ảnh, tiêu đề, nội dung.
- Nút next/prev để chuyển slide.
- Thanh progress bar để chuyển slide và nhận biết vị trí của slide hiện tại.
- Xây dựng chức năng tự động chuyển slide sau mỗi 3s.

## Bài 2: Xây dựng form đăng ký tài khoản

**Yêu cầu:**

- Xây dựng giao diện form đăng ký tài khoản với các trường thông tin: Họ tên, Email, Mật khẩu, Xác nhận mật khẩu, giới
  tính.
- Khi người dùng nhấn nút bấm "Register", lấy toàn bộ thông tin đăng ký lưu vào biến registerInfo và hiển thị trong màn
  hình console.
