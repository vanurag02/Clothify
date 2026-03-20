import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { getProducts } from "../services/api";

const Collection = () => {
  const { search, showSearch } = useContext(ShopContext);

  // ================= STATE =================
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevance");

  // ================= FETCH PRODUCTS =================
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // ================= COMMON TOGGLE =================
  const toggleValue = (value, state, setState) => {
    if (state.includes(value)) {
      setState((prev) => prev.filter((item) => item !== value));
    } else {
      setState((prev) => [...prev, value]);
    }
  };

  const toggleCategory = (e) => {
    toggleValue(e.target.value, category, setCategory);
  };

  const toggleSubCategory = (e) => {
    toggleValue(e.target.value, subCategory, setSubCategory);
  };

  // ================= FILTER + SORT =================
  const applyFilterAndSort = () => {
    let productsCopy = products.slice();

    // SEARCH
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // CATEGORY FILTER
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    // SUB-CATEGORY FILTER
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    // SORT
    switch (sortType) {
      case "low-high":
        productsCopy.sort((a, b) => a.basePrice - b.basePrice);
        break;

      case "high-low":
        productsCopy.sort((a, b) => b.basePrice - a.basePrice);
        break;

      default:
        break;
    }

    setFilterProducts(productsCopy);
  };

  // ================= EFFECT =================
  useEffect(() => {
    applyFilterAndSort();
  }, [products, category, subCategory, sortType, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300">
      {/* LEFT FILTER */}
      <div className="min-w-60">
        <p
          className="my-2 text-lg font-semibold flex items-center cursor-pointer gap-4"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            src="/images/dropdown_icon.png"
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* CATEGORY */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm">
            <label>
              <input
                type="checkbox"
                value="top-wear"
                onChange={toggleCategory}
              />{" "}
              Top Wear
            </label>
            <label>
              <input
                type="checkbox"
                value="bottom-wear"
                onChange={toggleCategory}
              />{" "}
              Bottom Wear
            </label>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex justify-between mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-3 py-2 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 cursor-pointer hover:shadow-md transition-all ease-in-out duration-300"
          >
            <option value="relevance">Relevance</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
