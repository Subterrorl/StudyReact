import React, { createContext, useContext, useState } from "react";
import idata from "./interface";


type CartItem = idata & { quantity: number };


type CartContextType = {
  cart: CartItem[];
  updateCart: (item: idata) => void;
  clearCart: () => void;
  getTotalQuantity: () => number;
};

// สร้าง Context กำหนดเป็น null
const CartContext = createContext<CartContextType | null>(null);

// Provider สำหรับ CartContext
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ฟังก์ชันคำนวณจำนวนชิ้น
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // ฟังก์ชันเพิ่มสินค้า
  const updateCart = (item: idata) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem // ถ้าไม่ตรง, ให้คงค่าเดิม
        );
      } else {
        // ถ้ายังไม่มีสินค้านี้ในตะกร้า ให้เพิ่มสินค้าใหม่
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, clearCart, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook สำหรับใช้งาน CartContext
export const useCartContext = () => {
  const context = useContext(CartContext);
  console.log("useCartContext",context);
  /*if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }*/
  return context!;
};
