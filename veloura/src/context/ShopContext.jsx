import { createContext, useState } from "react";

/* =============== 1. CREATE CONTEXT =============== */
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  /* =============== 2. CONFIGURATION VALUES - GLOBAL CONSTANTS USED IN APP =============== */
  const currency = "₹";
  const deliveryCharges = 80;

  /* =============== 3. SEARCH STATE - CONTROLS SEARCH INPUT AND VISIBILITY =============== */
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  /* =============== 4. CART STATE
     - STORES CART ITEMS
     - CONTROLS DRAWER VISIBILITY
  =============== */
  const [cartItems, setCartItems] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  /* =============== 5. ADD TO CART FUNCTION
     - CHECK IF ITEM (ID + SIZE) ALREADY EXISTS
     - IF EXISTS → INCREASE QUANTITY
     - ELSE → ADD NEW ITEM
  =============== */
  const addToCart = (product, size) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && item.size === size,
      );

      /* -------- IF ITEM EXISTS -------- */
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      /* -------- ADD NEW ITEM -------- */
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          image: product.images[0], // FIRST IMAGE USED
          price:
            product.variants.find((v) => v.size === size)?.price ||
            product.basePrice,
          size,
          quantity: 1,
        },
      ];
    });

    /* -------- OPEN CART DRAWER AFTER ADD -------- */
    setIsDrawerOpen(true);
  };

  /* =============== 6. REMOVE ITEM FROM CART - REMOVE BASED ON ID + SIZE =============== */
  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size)),
    );
  };

  /* =============== 7. UPDATE ITEM QUANTITY
     - IF QUANTITY < 1 → REMOVE ITEM
     - ELSE → UPDATE QUANTITY
  =============== */
  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) return removeFromCart(id, size);

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item,
      ),
    );
  };

  /* =============== 8. CLEAR CART =============== */
  const clearCart = () => setCartItems([]);

  /* =============== 9. DERIVED VALUES (CALCULATIONS)
     - TOTAL ITEMS
     - SUBTOTAL
     - SHIPPING
     - FINAL TOTAL
  =============== */
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  /* -------- SHIPPING LOGIC --------
     - FREE IF SUBTOTAL > 999
     - FREE IF CART EMPTY
  */
  const shipping = subtotal === 0 ? 0 : subtotal > 999 ? 0 : deliveryCharges;

  const total = subtotal + shipping;

  /* =============== 10. CONTEXT VALUE (GLOBAL ACCESS) =============== */
  const value = {
    currency,
    deliveryCharges,

    // SEARCH
    search,
    setSearch,
    showSearch,
    setShowSearch,

    // CART
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,

    // CALCULATIONS
    totalItems,
    subtotal,
    shipping,
    total,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS FILE MANAGES GLOBAL STATE USING CONTEXT API.

   2. MAIN RESPONSIBILITIES:
      - SEARCH STATE MANAGEMENT
      - CART STATE MANAGEMENT
      - CART OPERATIONS (ADD, REMOVE, UPDATE, CLEAR)
      - PRICE CALCULATIONS

   3. CORE LOGIC:

      a) addToCart():
         - CHECKS IF ITEM EXISTS (ID + SIZE)
         - UPDATES QUANTITY OR ADDS NEW ITEM

      b) removeFromCart():
         - REMOVES ITEM BASED ON ID + SIZE

      c) updateQuantity():
         - UPDATES QUANTITY
         - REMOVES ITEM IF QUANTITY < 1

      d) CALCULATIONS:
         - totalItems → TOTAL QUANTITY
         - subtotal → SUM OF PRICE * QUANTITY
         - shipping → CONDITIONAL LOGIC
         - total → FINAL AMOUNT

   4. DATA FLOW:
      COMPONENT → CONTEXT FUNCTION → STATE UPDATE → UI UPDATE

   5. UX FEATURES:
      - AUTO OPEN CART DRAWER ON ADD
      - REAL-TIME PRICE CALCULATIONS

   6. IMPORTANT NOTES:

      - IMAGE USES product.images[0] (ADD FALLBACK FOR SAFETY)
      - VARIANT PRICE FALLBACK TO basePrice

========================================================= */
