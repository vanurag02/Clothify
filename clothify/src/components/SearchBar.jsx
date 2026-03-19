import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <>
      <div className="bg-gray-50 text-center py-2">
        <div className="inline-flex items-center justify-center border bg-white border-gray-200 px-5 py-2 mx-5 my-3 w-3/4 sm:w-1/2">
          <input
            type="text"
            placeholder="Type here to search"
            className="flex-1 outline-none text-sm"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <img src={assets.search_icon} alt="Search Icon" className="w-4" />
        </div>
        <img
          src={assets.cross_icon}
          alt="Close Icon"
          className="inline w-3 cursor-pointer"
          onClick={() => setShowSearch(false)}
        />
      </div>
    </>
  ) : null;
};

export default SearchBar;
