import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  /* =============== 1. CONTEXT VALUES (GLOBAL STATE)
     - SEARCH VALUE
     - SEARCH VISIBILITY CONTROL
  =============== */
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  /* =============== 2. LOCAL STATE - CONTROLS VISIBILITY BASED ON ROUTE =============== */
  const [visible, setVisible] = useState(false);

  /* =============== 3. ROUTE DETECTION - USED TO CHECK CURRENT PAGE =============== */
  const location = useLocation();

  /* =============== 4. SIDE EFFECT (ROUTE-BASED VISIBILITY) - SHOW SEARCH ONLY ON COLLECTION PAGE =============== */
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  /* =============== 5. CONDITIONAL RENDERING
     - RENDER ONLY IF:
       a) showSearch IS TRUE
       b) visible IS TRUE (CORRECT ROUTE)
  =============== */
  if (!(showSearch && visible)) return null;

  return (
    <div className="bg-gray-50 text-center py-2">
      {/* =============== 6. SEARCH INPUT CONTAINER =============== */}
      <div className="inline-flex items-center justify-center border bg-white border-gray-200 px-5 py-2 mx-5 my-3 w-3/4 sm:w-1/2">
        {/* SEARCH INPUT FIELD */}
        <input
          type="text"
          placeholder="Type here to search"
          className="flex-1 outline-none text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* SEARCH ICON */}
        <img src="/images/search_icon.png" alt="Search Icon" className="w-4" />
      </div>

      {/* =============== 7. CLOSE BUTTON =============== */}
      <img
        src="/images/cross_icon.png"
        alt="Close Icon"
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  );
};

export default SearchBar;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DISPLAYS A SEARCH BAR.

   2. CORE LOGIC:
      - USES CONTEXT TO MANAGE SEARCH VALUE AND VISIBILITY
      - USES useLocation() TO CHECK CURRENT ROUTE
      - SHOWS SEARCH BAR ONLY ON "COLLECTION" PAGE

   3. STATE FLOW:
      - showSearch → GLOBAL CONTROL (OPEN/CLOSE)
      - visible → LOCAL CONTROL (ROUTE-BASED)

   4. CONDITIONAL RENDERING:
      - COMPONENT RETURNS NULL IF CONDITIONS NOT MET

   5. UX FEATURES:
      - LIVE SEARCH INPUT (CONTROLLED COMPONENT)
      - CLEAN CLOSE BUTTON
      - CENTERED RESPONSIVE LAYOUT

   6. IMPROVEMENT NOTE:
      - location DEPENDENCY CAN BE OPTIMIZED TO location.pathname

========================================================= */
