import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/main.tsx";
import ProductList from "./components/productList.tsx";
import Product from "./components/product.tsx";
import Chart from "./components/chart.tsx";

const App = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/chart" element={<Chart />} />
          <Route path=":id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};

export default App;
