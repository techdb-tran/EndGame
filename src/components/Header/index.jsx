import React from "react";
import { Link } from "react-router-dom";
//import { AiOutlineSearch/*, AiOutlineHeart, AiOutlineShoppingCart*/ } from "react-icons/ai";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-top">
          <div className="flex-row container">
            <div className="flex-col flex-left">
              <ul className="nav nav-left nav-small nav-pills">
                <li className="menu-item">
                  <a href="/" className="nav-top-link">
                    <span>0123456789</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="/" className="nav-top-link">
                    <span>Trả góp 0% lãi suất</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-col flex-center">
              <ul className="nav nav-center nav-small nav-pills"></ul>
            </div>
            <div className="flex-col flex-right">
              <ul className="nav nav-right nav-small nav-pills">
                <li>
                  <a href="/">
                    <span>Danh sách yêu thích</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>Đăng nhập</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-main">
          <div className="header-inner flex-row logo-center container">
            <div id="logo" className="flex-col logo">
              <a href="/">
                <img
                  width="170"
                  height="75"
                  src="https://asiaprinting.net/wp-content/uploads/2020/08/l8.jpg"
                  className="header_logo header-logo"
                  alt="PRECITA"
                />
              </a>
            </div>
            <div className="flex-col flex-left">
              <ul className="header-nav header-nav-main nav nav-left  nav-uppercase">
                <li className="header-search-form search-form html">
                  <div className="header-search-form-wrapper">
                    <div className="searchform-wrapper">
                      <form className="searchform">
                        <div className="flex-row relative">
                          <div className="flex-col flex-grow">
                            <input
                              type="search"
                              className="search-field mb-0"
                              name="s"
                              value=""
                              placeholder="Tìm kiếm sản phẩm"
                              autocomplete="off"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-col flex-right">
              <ul className="header-nav header-nav-main nav nav-right  nav-uppercase">
                <li className="cart-item">
                  <a
                    href="/"
                    title="Giỏ hàng"
                    className="header-cart-link is-small"
                  >
                    <span className="header-cart-title">Giỏ hàng </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="flex-row container">
            <div className="flex-col flex-center">
              <ul className="nav header-nav header-bottom-nav nav-center  nav-line-bottom nav-uppercase">
                <li className="menu-item">
                  <Link to="/home" className="nav-top-link">
                    Home
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/laptops" className="nav-top-link">
                    Laptops
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/headphones" className="nav-top-link">
                    Headphones
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/tablets" className="nav-top-link">
                    Tablets
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/wacth" className="nav-top-link">
                    Watch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
