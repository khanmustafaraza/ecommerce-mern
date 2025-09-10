import React from "react";
import { Routes, Route } from "react-router-dom";

// todo main home page
import Home from "./pages/home/Home";
import AllProducts from "./pages/products/allproducts/AllProducts";
import ProductDetail from "./pages/products/productdetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

const App = () => {
  return (
    <Routes>
      {/* all user routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
