import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/layout";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductsManagement from "./components/AdminPage/ProductsManagement";
import AdminLayout from "./layouts/AdminLayout";
import Order from "./components/AdminPage/Order";
import DashBoard from "./components/AdminPage/DashBoard";
import OurStore from "./pages/OurStore/OurStore";
import UserManagement from "./components/AdminPage/UserManagement";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product" element={<OurStore />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="product-management" element={<ProductsManagement />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="order" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
