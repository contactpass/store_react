import React, { useState, useEffect } from "react";
import HomeTable from "./../../components/HomeTable";
import { getAllProducts } from "./../../api/api";

export default function Home() {
  const [product, setProduct] = useState({});
  const fecthProducts = async () => {
    let result = await getAllProducts();
    setProduct(result);
    console.log("product: ", result);
  };
  useEffect(() => {
    fecthProducts();
  }, []);

  return (
    <div>
      <HomeTable product={product} />
    </div>
  );
}
