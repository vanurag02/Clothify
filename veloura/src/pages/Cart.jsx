import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const {
    currency,
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    total,
  } = useContext(ShopContext);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
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
          <p className="text-[28px] font-medium text-black mb-1">
            Your cart is empty
          </p>
          <p className="text-[24px] text-gray-600 leading-relaxed">
            Looks like you haven't added anything yet.
          </p>
        </div>
        <Link
          to="/collection"
          className="bg-gray-950 text-white hover:bg-black text-[14px] font-medium tracking-[0.14em] uppercase px-7 py-3 transition-colors duration-200 mt-2"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16">
      {/* Title */}
      <p className="text-[26px] font-semibold tracking-wide text-black mb-10">
        Your Cart
        <span className="ml-2 text-gray-500 font-normal text-sm">
          ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
        </span>
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Items */}
        <div className="flex-1">
          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 pb-3 border-b border-gray-400">
            {["Product", "Price", "Quantity", "Total"].map((h) => (
              <p
                key={h}
                className="text-[14px] font-medium tracking-wide text-gray-600"
              >
                {h}
              </p>
            ))}
          </div>

          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center py-5 border-b border-gray-300"
            >
              {/* Product */}
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
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-[10px] tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors mt-2 underline underline-offset-4"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <p className="text-sm text-gray-700">
                {currency}
                {item.price.toLocaleString("en-IN")}
              </p>

              {/* Quantity */}
              <div className="flex items-center border border-gray-200 w-fit">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity - 1)
                  }
                  className="w-8 h-8 text-gray-500 hover:text-gray-900 transition-colors"
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
                  className="w-8 h-8 text-gray-500 hover:text-gray-900 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Total */}
              <p className="text-sm font-medium text-gray-900">
                {currency}
                {(item.price * item.quantity).toLocaleString("en-IN")}
              </p>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-72 shrink-0">
          <div className="border border-gray-300 p-6">
            <p className="text-[14px] uppercase text-black font-semibold mb-5">
              Order Summary
            </p>
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span className="text-black font-semibold">Subtotal</span>
              <span className="text-black font-medium">
                {currency}
                {subtotal.toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span className="text-black font-semibold">Shipping</span>
              <span
                className={shipping === 0 ? "text-green-600 font-medium" : ""}
              >
                {shipping === 0 ? "Free" : `${currency}${shipping}`}
              </span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-gray-400 mb-4 -mt-2">
                Add {currency}
                {(999 - subtotal + 1).toLocaleString("en-IN")} more for free
                shipping
              </p>
            )}
            <div className="h-px bg-gray-200 mb-4" />
            <div className="flex justify-between text-sm font-medium text-gray-900 mb-6">
              <span>Total</span>
              <span>
                {currency}
                {total.toLocaleString("en-IN")}
              </span>
            </div>
            <button className="w-full bg-gray-950 text-white hover:bg-black text-[12px] font-medium tracking-wider uppercase cursor-pointer py-3.5 transition-all ease-in-out duration-200">
              Proceed to Checkout
            </button>
            <Link
              to="/collection"
              className="block text-center text-[12px] font-medium uppercase text-gray-600 hover:text-gray-900 transition-all mt-4"
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
