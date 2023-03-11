import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Cart from "./pages/CartPage/CartPage";
import Home from "./pages/HomePage/HomePage";
import ProductManagement from "./components/AdminPage/ProductManagement";
import AdminLayout from "./layouts/AdminLayout";
import OrdersTab from "./components/AdminPage/OrdersTab";
import DashBoard from "./components/AdminPage/DashBoard";
import UserManagement from "./components/AdminPage/UserManagement";
import ProductSingle from "./pages/ProductSinglePage/ProductSinglePage";
import CategoryProduct from "./pages/CategoryProductPage/CategoryProductPage";
import Search from "./pages/SearchPage/SearchPage";
import Layout from "./layouts/UserLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header />
        <Sidebar /> */}
        {/* <Route> */}
        {/* <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product/:id" element={<ProductSingle />} />
            <Route path="/category/:category" element={<CategoryProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Route> */}
        {/* <Route> */}
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product/:id" element={<ProductSingle />} />
            <Route path="/category/:category" element={<CategoryProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Route>
          <Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route
                path="product-management"
                element={<ProductManagement />}
              />
              <Route path="user-management" element={<UserManagement />} />
              <Route path="order" element={<OrdersTab />} />
            </Route>
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
