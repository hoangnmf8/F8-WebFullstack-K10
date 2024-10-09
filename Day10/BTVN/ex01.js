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
  {
    id: 9,
    name: 'Skirt-A',
    parentId: 8,
  },
  {
    id: 10,
    name: 'Skirt-B',
    parentId: 8,
  },
  {
    id: 11,
    name: 'Skirt-C',
    parentId: 8,
  },
]

/**
 * * - Xây dựng hàm tạo menu từ dữ liệu cho trước. `parentId` là id của menu cha. Nếu `parentId` là 0 thì đó là menu chính,
  ngược lại là menu con.
 * * - Thay đổi font-size là 24px cho menu chính và font-size là 20px cho menu con bằng JavaScript.
 */

function buildMenu(menu, parentId = 0) {
  const menuItems = menu.filter((item) => item.parentId === parentId)

  if (menuItems.length === 0) return ''

  let menuHTML = '<ul>'

  menuItems.forEach((item) => {
    menuHTML += `<li><a href="#">${item.name}</a></li>`

    const subMenuHTML = buildMenu(menu, item.id)
    if (subMenuHTML) {
      menuHTML += subMenuHTML
    }
  })

  // logic

  menuHTML += '</ul>'
  console.log(menuHTML)
  return menuHTML
}

document.getElementById('menu').innerHTML = buildMenu(menu)

const mainMenuItems = document.querySelectorAll('#menu > ul > li > a')

mainMenuItems.forEach((item) => {
  item.style.fontSize = '24px'
})

const subMenuItems = document.querySelectorAll('#menu > ul ul li a')

subMenuItems.forEach((item) => {
  item.style.fontSize = '20px'
})
