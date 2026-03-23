import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/api";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { addToCart } = useContext(ShopContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProducts();
      const foundProduct = data.find((item) => item.id === Number(productId));
      setProduct(foundProduct);
      setImage(foundProduct?.images[0]);
    };
    fetchProduct();
  }, [productId]);

  if (!product)
    return <p className="text-center py-10 text-gray-400">Loading...</p>;

  const currentPrice = selectedSize
    ? product.variants.find((v) => v.size === selectedSize)?.price
    : product.basePrice;

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - currentPrice) / product.originalPrice) * 100,
      )
    : null;

  const selectedVariant = product.variants.find((v) => v.size === selectedSize);

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 border-t border-gray-300">
      <div className="flex flex-col md:flex-row gap-12">
        {/* LEFT — Images */}
        <div className="flex-1 flex gap-5">
          {/* Thumbnails — main images only (excluding color images) */}
          <div className="flex flex-col gap-2">
            {product.images
              .slice(0, product.images.length - (product.colors?.length || 0))
              .map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setImage(img)}
                  className={`w-16 h-20 object-cover cursor-pointer border-2 transition-all duration-200 ${
                    image === img
                      ? "border-gray-400"
                      : "border-transparent hover:border-gray-300"
                  }`}
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={image}
              alt={product.name}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT — Details */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Name */}
          <h1 className="text-xl font-semibold text-gray-900">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-green-600 text-white text-xs font-medium px-2 py-0.5 rounded-sm">
              <span>{product.rating}</span>
              <i className="bi bi-star-fill text-[10px]"></i>
            </div>
            <span className="text-sm text-gray-600">
              {product.reviews} Ratings
            </span>
          </div>

          <div className="h-px bg-gray-300" />

          {/* Price */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <p className="text-2xl font-bold text-gray-900">₹{currentPrice}</p>
            {product.originalPrice && (
              <>
                <p className="text-sm text-gray-400 line-through">
                  MRP ₹{product.originalPrice}
                </p>
                <p className="text-sm font-medium text-orange-500">
                  ({discount}% OFF)
                </p>
              </>
            )}
          </div>
          <p className="text-[14px] text-gray-500 -mt-3">
            Inclusive of all taxes
          </p>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <p className="text-[12px] font-semibold tracking-wide uppercase text-gray-700 mb-3">
                More Colors
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, i) => {
                  const colorImgIndex =
                    product.images.length - product.colors.length + i;
                  const colorImg = product.images[colorImgIndex];
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedColor(color);
                        setImage(colorImg);
                      }}
                      title={color}
                      className={`w-14 h-16 border-2 transition-all duration-200 overflow-hidden ${
                        selectedColor === color
                          ? "border-gray-900"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={colorImg}
                        alt={color}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.variants && (
            <div>
              <p className="text-xs font-semibold tracking-wide uppercase text-gray-700 mb-3">
                Select Size
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map((variant, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      variant.stock !== 0 && setSelectedSize(variant.size)
                    }
                    disabled={variant.stock === 0}
                    className={`w-16 h-12 text-sm border transition-all duration-200 ${
                      variant.stock === 0
                        ? "border-gray-200 text-gray-300 cursor-not-allowed line-through"
                        : selectedSize === variant.size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-900"
                    }`}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>

              {/* Stock indicator — shows after size is selected */}
              {selectedVariant?.stock > 0 && selectedVariant.stock < 5 && (
                <p className="text-[14px] font-medium text-orange-500 mt-2">
                  Only {selectedVariant.stock} left — hurry!
                </p>
              )}
            </div>
          )}

          {/* Add to Cart */}
          <button
            className="bg-gray-950 text-white hover:bg-black text-[12px] font-medium tracking-[0.14em] uppercase px-7 py-3 w-full cursor-pointer transition-all ease-in-out duration-200 mt-2"
            onClick={() => addToCart(product, selectedSize)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
