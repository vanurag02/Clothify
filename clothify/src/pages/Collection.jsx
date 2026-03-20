import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  // ================= STATE =================
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevance");

  // ================= COMMON TOGGLE LOGIC =================
  const toggleValue = (value, state, setState) => {
    if (state.includes(value)) {
      setState((prev) => prev.filter((item) => item !== value));
    } else {
      setState((prev) => [...prev, value]);
    }
  };

  // ================= CATEGORY =================
  const toggleCategory = (e) => {
    toggleValue(e.target.value, category, setCategory);
  };

  useEffect(() => {
    console.log("Category changed:", category);
  }, [category]);

  // ================= SUB-CATEGORY =================
  const toggleSubCategory = (e) => {
    toggleValue(e.target.value, subCategory, setSubCategory);
  };

  useEffect(() => {
    console.log("SubCategory changed:", subCategory);
  }, [subCategory]);

  // ================= FILTER + SORT (COMBINED) =================
  const applyFilterAndSort = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // ===== FILTER =====
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    // ===== SORT =====
    switch (sortType) {
      case "low-high":
        productsCopy.sort((a, b) => a.price - b.price);
        break;

      case "high-low":
        productsCopy.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    setFilterProducts(productsCopy);
  };

  // ================= EFFECT =================
  useEffect(() => {
    applyFilterAndSort();
  }, [category, subCategory, sortType, products, search, showSearch]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300">
        {/* FILTER OPTIONS | LEFT SIDE*/}
        <div className="min-w-60">
          <p
            className="my-2 text-lg font-semibold flex items-center cursor-pointer gap-4"
            onClick={() => setShowFilter(!showFilter)}
          >
            FILTERS
            <img
              src={assets.dropdown_icon}
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""} transition-all ease-in-out duration-200`}
              alt=""
            />
          </p>
          {/* CATEGORY FILTER */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Men"}
                  onChange={toggleCategory}
                />
                Men
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Women"}
                  onChange={toggleCategory}
                />
                Women
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Kids"}
                  onChange={toggleCategory}
                />
                Kids
              </p>
            </div>
          </div>

          {/* SUB-CATEGORY FILTER */}
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Topwear"}
                  onChange={toggleSubCategory}
                />
                Top wear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Bottomwear"}
                  onChange={toggleSubCategory}
                />
                Bottom wear
              </p>
              <p className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-3"
                  value={"Winterwear"}
                  onChange={toggleSubCategory}
                />
                Winter wear
              </p>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTION"} />

            {/* SORT DROPDOWN */}
            <select
              className="border border-gray-300 text-sm px-3 py-2 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 cursor-pointer hover:shadow-md transition-all ease-in-out duration-300"
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="relevance">Relevance</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* MAPPING PRODUCTS */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
