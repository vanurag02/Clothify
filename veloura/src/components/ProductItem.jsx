import React from "react";
import { Link } from "react-router-dom";

const renderStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <i
          key={`f${i}`}
          className="bi bi-star-fill text-yellow-400 text-[11px]"
        />
      ))}
      {half && <i className="bi bi-star-half text-yellow-400 text-[11px]" />}
      {Array.from({ length: empty }).map((_, i) => (
        <i key={`e${i}`} className="bi bi-star text-gray-400 text-[11px]" />
      ))}
    </span>
  );
};

const ProductItem = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block text-gray-700 cursor-pointer border border-gray-200 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-all ease-in-out duration-200"
    >
      {/* Image */}
      <div className="overflow-hidden bg-[#f0ede8] aspect-3/4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-fit"
        />
      </div>

      {/* Info */}
      <div className="pt-3 px-3 pb-3">
        <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">
          {product.name}
        </p>
        <p className="font-semibold text-gray-900 mt-1.5">
          ₹{product.basePrice.toLocaleString("en-IN")}
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
