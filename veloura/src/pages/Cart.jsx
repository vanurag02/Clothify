import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  /* =============== 1. CONTEXT VALUES (GLOBAL STATE) - CART DATA + OPERATIONS - PRICE CALCULATIONS =============== */
  const {
    currency,
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    total,
  } = useContext(ShopContext);

  /* =============== 2. EMPTY CART STATE - SHOW WHEN NO ITEMS IN CART =============== */
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
        {/* EMPTY ICON */}
        <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2a2b2c"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        </div>

        {/* EMPTY TEXT */}
        <div>
          <p className="text-[28px] font-medium text-black mb-1">
            Empty cart, full potential
          </p>
          <p className="text-[24px] text-gray-600 leading-relaxed">
            Start adding items to bring your style to life.
          </p>
        </div>

        {/* CTA BUTTON */}
        <Link
          to="/collection"
          className="bg-gray-950 text-white hover:bg-black text-[14px] font-medium tracking-wider uppercase px-7 py-3 transition-colors duration-200 mt-2"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16">
      {/* =============== 3. PAGE TITLE =============== */}
      <p className="text-[26px] font-semibold text-black mb-10">
        Your Cart
        <span className="ml-2 text-gray-500 font-normal text-sm">
          ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
        </span>
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* =============== 4. CART ITEMS SECTION =============== */}
        <div className="flex-1">
          {/* TABLE HEADER (DESKTOP) */}
          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 pb-3 border-b border-gray-400">
            {["Product", "Price", "Quantity", "Total"].map((heading) => (
              <p
                key={heading}
                className="text-[14px] font-medium tracking-wide text-gray-600"
              >
                {heading}
              </p>
            ))}
          </div>

          {/* ================= CART ITEMS LIST ================= */}
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center py-5 border-b border-gray-300"
            >
              {/* PRODUCT INFO */}
              <div className="flex gap-4 items-start">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover bg-gray-100 shrink-0"
                />

                <div>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    Size: {item.size}
                  </p>

                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-[10px] tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors mt-2 underline underline-offset-4"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* PRICE */}
              <p className="text-sm text-gray-700">
                {currency}
                {item.price.toLocaleString("en-IN")}
              </p>

              {/* QUANTITY CONTROL */}
              <div className="flex items-center border border-gray-200 w-fit">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity - 1)
                  }
                  className="w-8 h-8 text-gray-500 hover:text-gray-900"
                >
                  −
                </button>

                <span className="text-sm px-3 min-w-8 text-center">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity + 1)
                  }
                  className="w-8 h-8 text-gray-500 hover:text-gray-900"
                >
                  +
                </button>
              </div>

              {/* ITEM TOTAL */}
              <p className="text-sm font-medium text-gray-900">
                {currency}
                {(item.price * item.quantity).toLocaleString("en-IN")}
              </p>
            </div>
          ))}
        </div>

        {/* =============== 5. ORDER SUMMARY SECTION =============== */}
        <div className="lg:w-72 shrink-0">
          <div className="border border-gray-300 p-6">
            {/* TITLE */}
            <p className="text-[14px] uppercase text-black font-semibold mb-5">
              Order Summary
            </p>

            {/* SUBTOTAL */}
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold">Subtotal</span>
              <span className="font-medium">
                {currency}
                {subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            {/* SHIPPING */}
            <div className="flex justify-between text-sm mb-4">
              <span className="font-semibold">Shipping</span>
              <span
                className={shipping === 0 ? "text-green-600 font-medium" : ""}
              >
                {shipping === 0 ? "Free" : `${currency}${shipping}`}
              </span>
            </div>

            {/* FREE SHIPPING MESSAGE */}
            {shipping > 0 && (
              <p className="text-xs text-gray-400 mb-4 -mt-2">
                Add {currency}
                {(999 - subtotal + 1).toLocaleString("en-IN")} more for free
                shipping
              </p>
            )}

            <div className="h-px bg-gray-200 mb-4" />

            {/* TOTAL */}
            <div className="flex justify-between text-sm font-medium text-gray-900 mb-6">
              <span>Total</span>
              <span>
                {currency}
                {total.toLocaleString("en-IN")}
              </span>
            </div>

            {/* CHECKOUT BUTTON */}
            <button className="w-full bg-gray-950 text-white hover:bg-black text-[12px] font-medium tracking-wider uppercase py-3.5 transition-all duration-200">
              Proceed to Checkout
            </button>

            {/* CONTINUE SHOPPING */}
            <Link
              to="/collection"
              className="block text-center text-[12px] font-medium uppercase text-gray-600 hover:text-gray-900 mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DISPLAYS THE CART PAGE.

   2. MAIN FEATURES:
      - EMPTY CART STATE
      - CART ITEMS LIST
      - QUANTITY CONTROLS
      - REMOVE ITEM FUNCTIONALITY
      - ORDER SUMMARY

   3. CORE LOGIC:
      - CONDITIONAL RENDERING FOR EMPTY CART
      - MAP FUNCTION TO DISPLAY ITEMS
      - QUANTITY UPDATE USING CONTEXT
      - DYNAMIC PRICE CALCULATIONS

   4. CALCULATIONS:
      - ITEM TOTAL = price × quantity
      - SUBTOTAL, SHIPPING, TOTAL FROM CONTEXT

   5. UX FEATURES:
      - FREE SHIPPING MESSAGE
      - RESPONSIVE TABLE LAYOUT
      - REAL-TIME UPDATES

   6. IMPROVEMENT NOTES:
      - ADD IMAGE FALLBACK
      - ADD DISABLED STATE FOR BUTTONS (UX)
      - ADD LOADING / EMPTY TRANSITIONS

========================================================= */
