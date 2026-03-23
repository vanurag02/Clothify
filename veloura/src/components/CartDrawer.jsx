import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const CartDrawer = () => {
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

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <p className="text-sm font-medium tracking-widest uppercase">
            Your Cart
            {totalItems > 0 && (
              <span className="ml-2 text-gray-400 font-normal">
                ({totalItems})
              </span>
            )}
          </p>
          <img
            src="/images/cross_icon.png"
            onClick={() => setIsDrawerOpen(false)}
            className="w-3 cursor-pointer"
          />
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
              {/* Empty bag icon */}
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
              <div>
                <p className="text-[18px] font-medium text-black mb-1">
                  Your cart is empty
                </p>
                <p className="text-[14px] text-gray-600 leading-relaxed">
                  Looks like you haven't added anything yet.
                </p>
              </div>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-3 px-5 py-4 border-b border-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover bg-gray-100 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800 truncate">{item.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Size: {item.size}
                  </p>
                  <p className="text-sm font-medium text-gray-900 mt-1">
                    {currency}
                    {item.price.toLocaleString("en-IN")}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                        className="w-7 h-7 text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="text-sm px-2 min-w-7 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="w-7 h-7 text-gray-500 hover:text-gray-900 transition-colors flex items-center justify-center"
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

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-5 py-5 border-t border-gray-200">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Subtotal</span>
              <span>
                {currency}
                {subtotal.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `${currency}${shipping}`}</span>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-900 mb-5">
              <span>Total</span>
              <span>
                {currency}
                {total.toLocaleString("en-IN")}
              </span>
            </div>
            <Link
              to="/cart"
              onClick={() => setIsDrawerOpen(false)}
              className="block w-full bg-gray-950 text-white hover:bg-black text-[12px] font-medium tracking-wider uppercase py-3.5 text-center transition-colors duration-200"
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
