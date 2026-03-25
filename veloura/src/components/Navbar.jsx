import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  /* =============== 1. STATE VARIABLES - CONTROLS MOBILE MENU VISIBILITY =============== */
  const [visible, setVisible] = useState(false);

  /* ===============
     2. CONTEXT VALUES (GLOBAL STATE)
     - SEARCH TOGGLE
     - CART ITEM COUNT
     - CART DRAWER CONTROL
  =============== */
  const { setShowSearch, totalItems, setIsDrawerOpen } =
    useContext(ShopContext);

  return (
    <div className="flex items-center justify-around py-5">
      {/* =============== 3. LOGO SECTION =============== */}
      <NavLink to="/">
        <img src="/images/logo.png" className="w-34" alt="Logo" />
      </NavLink>

      {/* =============== 4. DESKTOP NAVIGATION LINKS =============== */}
      <ul className="font-medium hidden sm:flex gap-5 text-gray-700">
        {/* NAV ITEM */}
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 hover:text-gray-950 transition-all duration-200"
        >
          <p>Home</p>
          <hr className="w-2/4 h-0.5 bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 hover:text-gray-950 transition-all duration-200"
        >
          <p>Collection</p>
          <hr className="w-2/4 h-0.5 bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 hover:text-gray-950 transition-all duration-200"
        >
          <p>About</p>
          <hr className="w-2/4 h-0.5 bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-gray-950 transition-all duration-200"
        >
          <p>Contact</p>
          <hr className="w-2/4 h-0.5 bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* =============== 5. RIGHT SECTION (ICONS) =============== */}
      <div className="flex items-center gap-8">
        {/* ================= SEARCH ICON ================= */}
        <img
          src="/images/search_icon.png"
          className="w-5 cursor-pointer"
          alt="Search Icon"
          onClick={() => setShowSearch(true)}
        />

        {/* ================= PROFILE DROPDOWN ================= */}
        <div className="group relative">
          <img
            src="/images/profile_icon.png"
            className="w-5 cursor-pointer"
            alt="Profile Icon"
          />

          {/* DROPDOWN MENU */}
          <div className="group-hover:block hidden absolute right-0 pt-4 shadow-lg transition-all duration-200">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-700 rounded border border-gray-200">
              <NavLink
                to="/login"
                className="text-[15px] font-medium hover:text-black transition-all duration-200"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>

        {/* ================= CART ICON ================= */}
        <button onClick={() => setIsDrawerOpen(true)} className="relative">
          <img
            src="/images/cart_icon.png"
            className="w-5 min-w-5 cursor-pointer"
            alt="Cart Icon"
          />

          {/* SHOW ITEM COUNT ONLY IF > 0 */}
          {totalItems > 0 && (
            <p className="absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {totalItems}
            </p>
          )}
        </button>

        {/* ================= MOBILE MENU ICON ================= */}
        <img
          src="/images/menu_icon.png"
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* =============== 6. MOBILE SIDEBAR MENU 
          - SLIDES IN FROM RIGHT 
          - CONTROLLED BY 'visible' STATE 
      =============== */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          {/* BACK BUTTON */}
          <div className="flex items-center gap-4 p-3 cursor-pointer">
            <img
              src="/images/dropdown_icon.png"
              className="h-4 rotate-180"
              alt="Back"
              onClick={() => setVisible(false)}
            />
            <p>Back</p>
          </div>

          {/* NAV LINKS */}
          <NavLink
            to="/"
            className="py-3 pl-6 border-b-2 border-gray-200"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            className="py-3 pl-6 border-b-2 border-gray-200"
            onClick={() => setVisible(false)}
          >
            Collection
          </NavLink>

          <NavLink
            to="/about"
            className="py-3 pl-6 border-b-2 border-gray-200"
            onClick={() => setVisible(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="py-3 pl-6 border-b-2 border-gray-200"
            onClick={() => setVisible(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT REPRESENTS THE MAIN NAVIGATION BAR.

   2. CORE FEATURES:
      - NAVIGATION LINKS (DESKTOP + MOBILE)
      - SEARCH TOGGLE USING CONTEXT
      - CART DRAWER OPEN FUNCTIONALITY
      - DYNAMIC CART ITEM COUNT DISPLAY
      - PROFILE DROPDOWN MENU

   3. STATE MANAGEMENT:
      - 'visible' → CONTROLS MOBILE MENU OPEN/CLOSE

   4. CONDITIONAL RENDERING:
      - CART COUNT SHOWN ONLY IF ITEMS > 0
      - MOBILE MENU WIDTH CHANGES BASED ON STATE

   5. UI STRUCTURE:
      - LEFT: LOGO
      - CENTER: NAV LINKS (DESKTOP)
      - RIGHT: ICONS (SEARCH, PROFILE, CART, MENU)

   6. UX FEATURES:
      - HOVER DROPDOWN (PROFILE)
      - SLIDE-IN MOBILE MENU
      - CLICK ACTIONS FOR SEARCH & CART

========================================================= */
