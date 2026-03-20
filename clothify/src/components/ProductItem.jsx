import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  // Function to render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <span className="text-sm sm:text-base font-semibold text-yellow-500">
        {"★".repeat(fullStars)}
        {halfStar && "½"}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block text-gray-700 cursor-pointer border border-gray-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
    >
      {/* Image */}
      <div className="overflow-hidden bg-[#f0ede8] aspect-3/4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="pt-3 px-2 pb-2">
        <p className="text-sm font-medium text-gray-800 line-clamp-2">
          {product.name}
        </p>
        <p className="font-semibold text-gray-700 mt-1">₹{product.basePrice}</p>

        {/* Rating & Reviews */}
        <p className="mt-1 text-gray-900 text-xs sm:text-sm">
          {renderStars(product.rating)}{" "}
          <span className="ml-1">({product.reviews})</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
