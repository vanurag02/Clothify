import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import { getProducts } from "../services/api";
import Title from "./Title";

const LatestCollection = () => {
  const [products, setProducts] = useState([]);

  // Helper function to shuffle array
  const shuffleArray = (array) => {
    return array.sort(() => 0.5 - Math.random());
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();

      // Separate categories
      const menProducts = data.filter((item) => item.category === "Men");

      const womenProducts = data.filter((item) => item.category === "Women");

      // Shuffle and pick 2 each
      const randomMen = shuffleArray(menProducts).slice(0, 2);
      const randomWomen = shuffleArray(womenProducts).slice(0, 2);

      // Combine
      setProducts([...randomMen, ...randomWomen]);
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-8">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600">
          Explore our latest styles and fresh arrivals designed for everyday
          wear.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
