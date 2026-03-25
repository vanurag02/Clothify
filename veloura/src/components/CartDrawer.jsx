import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const CartDrawer = () => {
  /* =============== 1. CONTEXT VALUES (GLOBAL STATE FROM SHOP CONTEXT) =============== */
  const {
    currency,
    cartItems,
    isDrawerOpen,
    setIsDrawerOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    subtotal,
    shipping,
    total,
  } = useContext(ShopContext);

  /* =============== 2. CONDITIONAL RENDERING (DRAWER VISIBILITY) - IF DRAWER IS CLOSED, DO NOT RENDER ANYTHING =============== */
  if (!isDrawerOpen) return null;

  return (
    <>
      {/*=============== 3. BACKDROP (CLICK TO CLOSE DRAWER) =============== */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* =============== 4. MAIN DRAWER CONTAINER =============== */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col shadow-xl">
        {/* =============== 5. HEADER SECTION (TITLE + CLOSE BUTTON) =============== */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <p className="text-sm font-medium tracking-widest uppercase">
            Your Cart
            {/* SHOW TOTAL ITEMS ONLY IF > 0 */}
            {totalItems > 0 && (
              <span className="ml-2 text-gray-400 font-normal">
                ({totalItems})
              </span>
            )}
          </p>

          {/* CLOSE BUTTON */}
          <img
            src="/images/cross_icon.png"
            onClick={() => setIsDrawerOpen(false)}
            className="w-3 cursor-pointer"
          />
        </div>

        {/* =============== 6. CART ITEMS SECTION
            - SHOW EMPTY STATE IF NO ITEMS
            - OTHERWISE, MAP THROUGH CART ITEMS
        =============== */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            /* ================= EMPTY CART STATE ================= */
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
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
                <p className="text-[18px] font-medium text-black mb-1">
                  Your cart is empty
                </p>
                <p className="text-[16px] text-gray-600 leading-relaxed">
                  Looks like you haven't added anything yet.
                </p>
              </div>
            </div>
          ) : (
            /* ================= CART ITEMS LIST ================= */
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-3 px-5 py-4 border-b border-gray-100"
              >
                {/* PRODUCT IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover bg-gray-100 shrink-0"
                />

                {/* PRODUCT DETAILS */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800 truncate">{item.name}</p>

                  <p className="text-xs text-gray-400 mt-0.5">
                    Size: {item.size}
                  </p>

                  <p className="text-sm font-medium text-gray-900 mt-1">
                    {currency}
                    {item.price.toLocaleString("en-IN")}
                  </p>

                  {/* ================= QUANTITY CONTROLS ================= */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200">
                      {/* DECREASE QUANTITY */}
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                        className="w-7 h-7 text-gray-500 hover:text-gray-900 flex items-center justify-center"
                      >
                        −
                      </button>

                      {/* CURRENT QUANTITY */}
                      <span className="text-sm px-2 min-w-7 text-center">
                        {item.quantity}
                      </span>

                      {/* INCREASE QUANTITY */}
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="w-7 h-7 text-gray-500 hover:text-gray-900 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* =============== 7. FOOTER SECTION (PRICE SUMMARY + CTA) - ONLY VISIBLE IF CART HAS ITEMS =============== */}
        {cartItems.length > 0 && (
          <div className="px-5 py-5 border-t border-gray-200">
            {/* SUBTOTAL */}
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Subtotal</span>
              <span>
                {currency}
                {subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            {/* SHIPPING */}
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `${currency}${shipping}`}</span>
            </div>

            {/* TOTAL */}
            <div className="flex justify-between text-sm font-medium text-gray-900 mb-5">
              <span>Total</span>
              <span>
                {currency}
                {total.toLocaleString("en-IN")}
              </span>
            </div>

            {/* VIEW CART BUTTON */}
            <Link
              to="/cart"
              onClick={() => setIsDrawerOpen(false)}
              className="block w-full bg-gray-950 text-white hover:bg-black text-[12px] font-medium tracking-wider uppercase py-3.5 text-center"
            >
              View Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DISPLAYS A SIDE DRAWER CART UI.
   2. IT FETCHES CART DATA FROM SHOP CONTEXT.
   3. CONDITIONAL RENDERING:
      - RETURNS NULL IF DRAWER IS CLOSED.
      - SHOWS EMPTY STATE IF NO ITEMS.
      - OTHERWISE DISPLAYS CART ITEMS.

   4. CORE LOGIC IMPLEMENTED:
      - MAP FUNCTION TO RENDER CART ITEMS.
      - QUANTITY CONTROL USING updateQuantity().
      - TOTAL CALCULATIONS (subtotal, shipping, total) FROM CONTEXT.
      - DYNAMIC UI BASED ON CART STATE.

   5. UX FEATURES:
      - BACKDROP CLICK CLOSES DRAWER.
      - LIVE ITEM COUNT DISPLAY.
      - REAL-TIME PRICE UPDATES.
      - SCROLLABLE ITEMS LIST.
      
========================================================= */
