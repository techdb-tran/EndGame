import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BlogCard from "./components/BlogCard/BlogCard";
import Layout from "./components/Layout/layout";
import ProductCard from "./components/ProductCard/ProductCard";
import Home from "./pages/Home/Home";
import ProductsManagement from './components/AdminPage/ProductsManagement';
import Report from './components/AdminPage/Report';
import Statistical from './components/AdminPage/Statistical';
import User from './components/AdminPage/User';
import AdminLayout from './layouts/AdminLayout';
import Clothes from './components/AdminPage/Clothes';
import LivingTool from './components/AdminPage/LivingTool';
import Stationery from './components/AdminPage/Stationery';
import EmailList from './components/AdminPage/EmailList';
import Comments from './components/AdminPage/Comments';
import Weekly from './components/AdminPage/Weekly';
import Monthly from './components/AdminPage/Monthly';
import Customer from "./components/AdminPage/Customer";
import DashBoard from "./components/AdminPage/DashBoard";
import Logistic from "./components/AdminPage/Logistic";
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
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='dashboard' element={<DashBoard/>} />
            <Route path='statistical' element={<Statistical />} />
            <Route path='product-management' element={<ProductsManagement />} />
            <Route path='user' element={<User />} />
            <Route path='customer' element={<Customer />} />
            <Route path='report' element={<Report />} />
          </Route>
          <Route path='/admin/product-management' element={<AdminLayout />}>
            <Route path='clothes' element={<Clothes />} />
            <Route path='living-tool' element={<LivingTool />} />
            <Route path='stationery' element={<Stationery />} />
          </Route>
          <Route path='/admin/customer' element={<AdminLayout />}>
            <Route path='email-list' element={<EmailList />} />
            <Route path='comments' element={<Comments />} />
            <Route path='logistic' element={<Logistic />} />
          </Route>
          <Route path='/admin/statistical' element={<AdminLayout />}>
            <Route index element={<Statistical/>} />
            <Route path='monthly' element={<Monthly />} />
            <Route path='weekly' element={<Weekly />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
