import React from "react";

import Header from "../header/Header";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Basket from "../../pages/Basket";
import Products from "../../pages/Products";
import ProductDetail from "../../pages/ProductDetail";

import PlantPots from "../../pages/PlantPots";
import Ceramics from "../../pages/Ceramics";
import Tables from "../../pages/Tables";
import Chairs from "../../pages/Chairs";
import Crockery from "../../pages/Crockery";
import Tableware from "../../pages/Tableware";
import Cutlery from "../../pages/Cutlery";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/plantPots" element={<PlantPots />} />
        <Route path="/ceramics" element={<Ceramics />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/crockery" element={<Crockery />} />
        <Route path="/Tableware" element={<Tableware />} />
        <Route path="/Cutlery" element={<Cutlery />} />
      </Routes>
    </div>
  );
};

export default Layout;
