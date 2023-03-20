import React, { useState } from "react";
import "./Header.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const { isLogged, user } = useSelector((state) => state.users);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const styleActive = ({ isActive }) => {
    return {
      color: isActive ? "#B99B6B" : "#000",
    };
  };

  return (
    <header className="header text-white">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-top fs-13 py-2 flex align-center justify-between">
            <div className="header-cnt-top-l">
              <ul className="flex top-links align-center">
                <li className="flex align-center">
                  <span className="fs-13">Follow us on</span>
                  <ul className="social-links flex align-center">
                    <li className="mx-2">
                      <a href="www.facebook.com" className="fs-15">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a href="www.instagram.com" className="fs-15">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header-cnt-top-r">
              <ul className="top-links flex align-center">
                <li>
                  <Link to="/wishlist">
                    <span className="top-link-itm-txt">Wishlist</span>
                  </Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  {/* <Link to="/login">
                    <span className="top-link-itm-txt">Log in</span>
                  </Link> */}
                  {isLogged ? (
                    <li>
                      <NavLink to={"/account"}>
                        <span className="header-avatar">
                          <img src={user?.image} alt="" />
                        </span>
                      </NavLink>
                    </li>
                  ) : (
                    <li>
                      <NavLink
                        style={styleActive}
                        onClick={() => setToggle(false)}
                        to={"/login"}
                      >
                        <span>LOGIN</span>
                      </NavLink>
                    </li>
                  )}
                </li>
              </ul>
            </div>
          </div>

          <div className="header-cnt-bottom">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
