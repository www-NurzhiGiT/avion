import React, { useContext } from "react";
import { DataContext } from "../context/AppContext";

const Products = () => {
  const context = useContext(DataContext);
  const { products } = context;
  return (
    <div>
      {products.map((el) => (
        <div>
          <h2>{el.title}</h2>
          <img src={el.image} alt="images" />
        </div>
      ))}
    </div>
  );
};

export default Products;
