import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductItem from "../components/ProductItem";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <LatestCollection />
      <OurPolicy />
      <NewsLetter />
    </>
  );
};

export default Home;
