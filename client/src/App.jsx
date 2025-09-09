import React from "react";
import { Routes, Route } from "react-router-dom";

// todo main home page
import Home from "./pages/home/Home";
import AllProducts from "./pages/products/allproducts/AllProducts";

const App = () => {
  return (
    <Routes>
      {/* all user routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
    </Routes>
  );
};

export default App;
