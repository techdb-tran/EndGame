import React, { useEffect } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getSidebarStatus,
  setSidebarOff,
} from "../../redux/features/sidebarSlice/sidebarSlice";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../redux/features/categorySlice/categorySlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const {allProducts} = useSelector(state => state.products)
  const category = allProducts.reduce((acc, item) => {
    if (!acc.includes(item.productType)) {
      acc.push(item.productType);
    }
    return acc;
  }, []);
  const categories = []
  category.forEach((item, index) => {
    categories[index] = item;
  });
  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);
  console.log(categories)
  return (
    <aside className={`sidebar ${isSidebarOn ? "hide-sidebar" : ""}`}>
      <button
        type="button"
        className="sidebar-hide-btn"
        onClick={() => dispatch(setSidebarOff())}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="sidebar-cnt">
        <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
          All Categories
        </div>
        <ul className="cat-list">
          {categories.map((category, index) => {
            return (
              <li key={index} onClick={() => dispatch(setSidebarOff())}>
                <Link
                  to={`category/${category}`}
                  className="cat-list-link text-capitalize"
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
