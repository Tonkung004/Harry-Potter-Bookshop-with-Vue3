export function calculateTotalPriceBeforeDiscount(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

export function calculateDiscount(cart) {
  if (cart.length === 0) {
    return 0 // ถ้าตะกร้าว่างให้คืนค่า 0
  }

  const pricePerBook = 100
  let discount = 0

  const bookCounts = {}
  cart.forEach((book) => {
    bookCounts[book.name] = (bookCounts[book.name] || 0) + book.quantity
  })

  const uniqueBooks = Object.keys(bookCounts)
  while (uniqueBooks.length > 0) {
    const setCount = uniqueBooks.length

    let discountRate = 0
    if (setCount === 2) discountRate = 0.1
    else if (setCount === 3) discountRate = 0.2
    else if (setCount === 4) discountRate = 0.3
    else if (setCount === 5) discountRate = 0.4
    else if (setCount === 6) discountRate = 0.5
    else if (setCount === 7) discountRate = 0.6

    discount += pricePerBook * setCount * discountRate

    uniqueBooks.forEach((book) => {
      bookCounts[book] -= 1
      if (bookCounts[book] === 0) delete bookCounts[book]
    })

    uniqueBooks.length = Object.keys(bookCounts).length
  }

  return discount
}

export function calculateTotalPrice(cart) {
  if (cart.length === 0) {
    return 0 // ถ้าตะกร้าว่างให้คืนค่า 0
  }

  const totalBeforeDiscount = calculateTotalPriceBeforeDiscount(cart) // ใช้ฟังก์ชัน calculateTotalPriceBeforeDiscount ที่มีอยู่
  const discount = calculateDiscount(cart) // ใช้ฟังก์ชัน calculateDiscount ที่มีอยู่

  return totalBeforeDiscount - discount // คำนวณราคารวมหลังหักส่วนลด
}
