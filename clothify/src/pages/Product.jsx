import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { productId } = useParams();

  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = use;

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return (
    <div>
      <h1>This is product component</h1>
    </div>
  );
};

export default Product;
