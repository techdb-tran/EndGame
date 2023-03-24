import React, { useEffect, useState } from "react";
import "./CategoryProductPage.scss";
import ProductList from "../../components/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProductsByCategory,
  fetchAsyncProductsOfCategory,
  getCategoryProductsStatus,
} from "../../redux/features/categorySlice/categorySlice";
import Loader from "../../components/Loader/Loader";
import { STATUS } from "../../constants/status";

const CategoryProductPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  const categoryProductsStatus = useSelector(getCategoryProductsStatus);
  const { allProducts } = useSelector((state) => state.products);
  const [filterType, setFilterType] = useState(allProducts);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);
  function handleClick(type) {
    switch (type) {
      case "accessory":
        setFilterType(
          allProducts.filter((item) => item.productType === "Accessory")
        );
        break;
      case "livingTool":
        setFilterType(
          allProducts.filter((item) => item.productType === "LivingTool")
        );
        break;
      case "stationary":
        setFilterType(
          allProducts.filter((item) => item.productType === "Stationary")
        );
        break;
      default:
        setFilterType(allProducts);
        break;
    }
  }
  console.log(filterType)
  return (
    <div className="cat-products py-5 bg-whitesmoke">
      <div className="container">
        <div className="cat-products-content">
          <div className="title-md">
            <h3>
              See our {" "}
              <span className="text-capitalize">
                {category.replace("-", " ")}
              </span>
            </h3>
            <button onClick={() => handleClick("accessory")}>Accessories</button>
            <button onClick={() => handleClick("livingTool")}>Living Tools</button>
            <button onClick={() => handleClick("stationary")}>Stationaries</button>
          </div>

          {categoryProductsStatus === STATUS.LOADING ? (
            <Loader />
          ) : (
            <ProductList products={filterType} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductPage;
