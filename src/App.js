import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BlogCard from "./components/BlogCard/BlogCard";
import Layout from "./components/Layout/layout";
import ProductCard from "./components/ProductCard/ProductCard";
import Home from "./pages/Home/Home";
// import Admin from "./layouts/AdminPage/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/home" element={<Home />} />
            <Route path="/laptops" element={<BlogCard />} />
            <Route path="/headphones" element={<ProductCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
