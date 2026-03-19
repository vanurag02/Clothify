import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  console.log("Product ID: " + productId);

  return (
    <div>
      <h1>This is product component</h1>
    </div>
  );
};

export default Product;
