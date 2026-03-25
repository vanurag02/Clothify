import React from "react";
import { Link } from "react-router-dom";

/* =============== 1. HELPER FUNCTION (STAR RATING RENDER)
   - CALCULATES FULL, HALF, AND EMPTY STARS
   - RETURNS JSX FOR STAR DISPLAY
=============== */
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <span className="flex items-center gap-0.5">
      {/* FULL STARS */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <i
          key={`full-${i}`}
          className="bi bi-star-fill text-yellow-400 text-[11px]"
        />
      ))}

      {/* HALF STAR */}
      {hasHalfStar && (
        <i className="bi bi-star-half text-yellow-400 text-[11px]" />
      )}

      {/* EMPTY STARS */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <i
          key={`empty-${i}`}
          className="bi bi-star text-gray-400 text-[11px]"
        />
      ))}
    </span>
  );
};

const ProductItem = ({ product }) => {
  /* =============== 2. DERIVED VALUES - SAFE ACCESS FOR PRODUCT DATA =============== */
  const { id, name, images, basePrice, rating, reviews } = product;

  return (
    <Link
      to={`/product/${id}`}
      className="group block text-gray-700 cursor-pointer border border-gray-200 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all duration-200"
    >
      {/* =============== 3. PRODUCT IMAGE =============== */}
      <div className="overflow-hidden bg-[#f0ede8] aspect-3/4">
        <img src={images[0]} alt={name} className="w-full h-full object-fit" />
      </div>

      {/* =============== 4. PRODUCT DETAILS =============== */}
      <div className="pt-3 px-3 pb-3">
        {/* PRODUCT NAME */}
        <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">
          {name}
        </p>

        {/* PRODUCT PRICE */}
        <p className="font-semibold text-gray-900 mt-1.5">
          ₹{basePrice.toLocaleString("en-IN")}
        </p>

        {/* RATING + REVIEWS */}
        <div className="flex items-center gap-2 mt-1.5">
          {renderStars(rating)}
          <span className="text-xs text-gray-500">({reviews})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

/* =========================================================
   COMPONENT SUMMARY

   1. THIS COMPONENT DISPLAYS A SINGLE PRODUCT CARD.

   2. CORE FEATURES:
      - PRODUCT IMAGE
      - PRODUCT NAME
      - PRODUCT PRICE
      - STAR RATING DISPLAY
      - REVIEW COUNT

   3. CORE LOGIC:
      - renderStars():
        a) CALCULATES FULL STARS
        b) CHECKS FOR HALF STAR
        c) FILLS REMAINING WITH EMPTY STARS

   4. DATA HANDLING:
      - USES DESTRUCTURING FOR CLEAN ACCESS
      - DYNAMIC ROUTING USING PRODUCT ID

   5. UX FEATURES:
      - HOVER SHADOW EFFECT
      - TRUNCATED PRODUCT NAME (2 LINES)
      - CLEAN RATING VISUALIZATION

   6. IMPORTANT NOTE:
      - ASSUMES images ARRAY HAS AT LEAST ONE IMAGE
      - ADD FALLBACK IMAGE FOR SAFETY (RECOMMENDED)

   OVERALL:
   CLEAN, REUSABLE, AND UI-FOCUSED COMPONENT WITH GOOD SEPARATION OF LOGIC.
========================================================= */
