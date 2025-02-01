import { describe, it, expect } from 'vitest';
import {
  calculateTotalPriceBeforeDiscount,
  calculateDiscount,
  calculateTotalPrice
} from '@/utils/cartUtils'


// Mock Data สำหรับทดสอบ
const cartMock = [
  { name: "Harry Potter 1", price: 100, quantity: 1 },
  { name: "Harry Potter 2", price: 100, quantity: 1 },
  { name: "Harry Potter 3", price: 100, quantity: 1 },
];

describe('Shopping Cart Calculation', () => {
  it('should calculate total price before discount correctly', () => {
    const total = calculateTotalPriceBeforeDiscount(cartMock);
    expect(total).toBe(300); // 100 * 3
  });

  it('should calculate discount correctly', () => {
    const discount = calculateDiscount(cartMock);
    expect(discount).toBe(60); // 3 เล่มได้ส่วนลด 20% => 300 * 0.2 = 60
  });

  it('should calculate total price after discount correctly', () => {
    const totalAfterDiscount = calculateTotalPrice(cartMock);
    expect(totalAfterDiscount).toBe(240); // 300 - 60
  });

  it('should return zero discount when cart is empty', () => {
    expect(calculateDiscount([])).toBe(0);
  });

  it('should return zero total price when cart is empty', () => {
    expect(calculateTotalPrice([])).toBe(0);
  });
});
