import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/layout";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductManagement from "./components/AdminPage/ProductManagement";
import AdminLayout from "./layouts/AdminLayout";
import OrdersTab from "./components/AdminPage/OrdersTab";
import DashBoard from "./components/AdminPage/DashBoard";
import OurStore from "./pages/OurStore/OurStore";
import UserManagement from "./components/AdminPage/UserManagement";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/SignUp";
import Wishlist from "./pages/Wishlist/Wishlist";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<OurStore />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="product-management" element={<ProductManagement />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="order" element={<OrdersTab/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
