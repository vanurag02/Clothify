import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  // Only show search bar if showSearch = true
  return showSearch ? (
    <div className="bg-gray-50 text-center py-2">
      <div className="inline-flex items-center justify-center border bg-white border-gray-200 px-5 py-2 mx-5 my-3 w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Type here to search"
          className="flex-1 outline-none text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src="/images/search_icon.png" alt="Search Icon" className="w-4" />
      </div>
      <img
        src="/images/cross_icon.png"
        alt="Close Icon"
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
