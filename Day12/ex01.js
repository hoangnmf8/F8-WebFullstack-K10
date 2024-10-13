const slides = document.querySelectorAll('.slide')
const nextBtn = document.getElementsByClassName('next')[0]
const prevBtn = document.getElementsByClassName('prev')[0]
const slideLength = slides.length
let currSlide = 0

const dots = document.querySelectorAll('.dot')
dots.forEach((item, index) => {
  item.addEventListener('click', () => setSlideByDot(index))
})

function setSlideByDot(index) {
  currSlide = index
  console.log(dots[index])
  renderSlide()
}

function renderSlide() {
  slides.forEach((item) => {
    item.style.display = 'none'
  })
  slides[currSlide].style.display = 'block'

  dots.forEach((item) => {
    item.style.background = 'green'
  })
  dots[currSlide].style.background = 'orange'
}

function next() {
  currSlide++
  if (currSlide >= slideLength) {
    currSlide = 0
  }
  renderSlide()
}

function prev() {
  currSlide--
  if (currSlide < 0) {
    currSlide = slideLength - 1
  }
  renderSlide()
}

nextBtn.addEventListener('click', next)
prevBtn.addEventListener('click', prev)

renderSlide()

/**
 * Bước 1:
 * - Khai báo 1 biến để lưu slide hiện tại (slide đang được hiển thị): currSlide
 * - Khai báo 1 hàm để cập nhật slide khi có sự kiện.
 *
 * Bước 2:
 * - Xử lý từng sự kiện next, prev
 *
 * Bước 3:
 * - Xử lý trường hợp cuộn đến cuối hoặc đầu.
 *
 * Bước 4: Xử lý thanh process.
 */
