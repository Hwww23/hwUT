// context/cart.js
import React, {
  useState,
  useContext,
  createContext,
  useEffect,
  useRef,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const skipFirstPersist = useRef(true); // 👈 new

  // read once on mount
  useEffect(() => {
    const raw = localStorage.getItem("cart");
    if (raw) {
      try {
        setCart(JSON.parse(raw));
      } catch (e) {
        console.error("Invalid cart in localStorage", e);
        localStorage.removeItem("cart");
      }
    }
  }, []);

  // write when cart changes, but skip the very first run
  useEffect(() => {
    if (skipFirstPersist.current) {
      skipFirstPersist.current = false;
      return; // 👈 don't write on initial mount
    }
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to persist cart", e);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
