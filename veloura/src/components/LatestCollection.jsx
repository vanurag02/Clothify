import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../services/api";
import Title from "./Title";

const LatestCollection = () => {
  /* =============== 1. STATE VARIABLES - STORES FINAL PRODUCTS TO DISPLAY =============== */
  const [products, setProducts] = useState([]);

  /* =============== 2. HELPER FUNCTIONS - SHUFFLE ARRAY TO GET RANDOM PRODUCTS =============== */
  const shuffleArray = (array) => {
    return array.sort(() => 0.5 - Math.random());
  };

  /* ===============
     3. FETCH & PROCESS PRODUCTS (SIDE EFFECT)
     - FETCH DATA FROM API
     - FILTER BY CATEGORY (MEN / WOMEN)
     - PICK RANDOM 2 FROM EACH CATEGORY
     - COMBINE AND STORE IN STATE
  =============== */
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();

      /* -------- FILTER PRODUCTS BY CATEGORY -------- */
      const menProducts = data.filter((item) => item.category === "Men");

      const womenProducts = data.filter((item) => item.category === "Women");

      /* -------- RANDOM SELECTION (2 EACH) -------- */
      const randomMen = shuffleArray(menProducts).slice(0, 2);
      const randomWomen = shuffleArray(womenProducts).slice(0, 2);

      /* -------- COMBINE BOTH LISTS -------- */
      const finalProducts = [...randomMen, ...randomWomen];

      setProducts(finalProducts);
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-8">
      {/* =============== 4. SECTION HEADER (TITLE + DESCRIPTION) =============== */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />

        <p className="w-3/4 m-auto text-sm md:text-base text-gray-600">
          Explore our latest styles and fresh arrivals designed for everyday
          wear.
        </p>
      </div>

      {/* =============== 5. PRODUCT GRID - MAP THROUGH PRODUCTS AND RENDER ProductItem =============== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DISPLAYS A MIX OF LATEST PRODUCTS.

   2. CORE LOGIC:
      - FETCH PRODUCTS FROM API USING getProducts()
      - FILTER PRODUCTS INTO:
        a) MEN CATEGORY
        b) WOMEN CATEGORY
      - RANDOMLY SELECT 2 PRODUCTS FROM EACH CATEGORY
      - COMBINE BOTH INTO A SINGLE ARRAY

   3. DATA FLOW:
      API DATA → FILTER → SHUFFLE → SLICE → COMBINE → STATE

   4. UI STRUCTURE:
      - HEADER (TITLE + DESCRIPTION)
      - PRODUCT GRID (RESPONSIVE)

   5. IMPORTANT NOTE:
      - shuffleArray() MUTATES ORIGINAL ARRAY (sort())
      - BETTER APPROACH: CLONE ARRAY BEFORE SHUFFLING

========================================================= */
