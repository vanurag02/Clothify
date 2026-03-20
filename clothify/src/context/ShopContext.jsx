import { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  // ================= CONFIG =================
  const currency = "₹";
  const deliveryCharges = 80;

  // ================= PRODUCTS =================
  //   const [productList] = useState(products);

  // ================= SEARCH =================
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // ================= CONTEXT VALUE =================

  const value = {
    // products,
    currency,
    deliveryCharges,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
