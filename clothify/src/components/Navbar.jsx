import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-around py-5 font-semibold">
      <NavLink to="/">
        <img src={assets.logo} className="" alt="" />
      </NavLink>
      <ul className="hidden sm:flex gap-5 text-gray-700 ">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 hover:text-gray-950 transition-all ease-in-out duration-200"
        >
          <p>Home</p>
          <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 hover:text-gray-950 transition-all ease-in-out duration-200"
        >
          <p>Collection</p>
          <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 hover:text-gray-950 transition-all ease-in-out duration-200"
        >
          <p>About</p>
          <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-gray-950 transition-all ease-in-out duration-200"
        >
          <p>Contact</p>
          <hr className="w-2/4 border-none h-0.5 bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-8">
        <img
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search Icon"
          onClick={() => setShowSearch(true)}
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile Icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 shadow-lg transition-all ease-in-out duration-200">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-white text-gray-700 rounded border border-gray-200">
              <p className="cursor-pointer hover:text-black transition-all ease-in-out duration-200">
                My Profile
              </p>
              <p className="cursor-pointer hover:text-black transition-all ease-in-out duration-200">
                Orders
              </p>
              <p className="cursor-pointer hover:text-black transition-all ease-in-out duration-200">
                Logout
              </p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart Icon" />
          <p className="absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu Icon"
          onClick={() => {
            setVisible(true);
          }}
        />
      </div>

      {/* SIDEBAR MENU FOR SMALL SCREEN */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-4 p-3 cursor-pointer">
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="Back Arrow"
              onClick={() => {
                setVisible(false);
              }}
            />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-3 pl-6 border-b-2 border-gray-200"
            onClick={() => {
              setVisible(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className="py-3 pl-6 border-b-2 border-gray-200"
            onClick={() => {
              setVisible(false);
            }}
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className="py-3 pl-6 border-b-2 border-gray-200"
            onClick={() => {
              setVisible(false);
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="py-3 pl-6 border-b-2 border-gray-200"
            onClick={() => {
              setVisible(false);
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
