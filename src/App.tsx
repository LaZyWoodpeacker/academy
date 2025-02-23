import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import ProductList from "./components/productList.tsx";
import Product from "./components/product.tsx";
import Cart from "./components/cart.tsx";
import CartButton from "./components/cartButton.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <div className="main-layout_header">
          <CartButton />
        </div>
        <div className="main-layout_content">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path=":id" element={<Product />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
