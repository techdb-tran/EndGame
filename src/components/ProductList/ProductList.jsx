import React, { useEffect } from "react";
import "./ProductList.scss";
import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { actFetchAllProduct } from "../../redux/features/products/productsSlice";

const ProductList = () => {
  const {allProducts} = useSelector(state => state.products)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actFetchAllProduct())
  },[])
  return (
    <div className="product-lists grid bg-whitesmoke my-3">
      {allProducts.map((product) => {
        let discountedPrice =
          product.productSalePrice - product.productSalePrice * (product.discount/100);
        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })}
      {/* {Object.keys(products).map((product) => {
        let discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);

        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })} */}
    </div>
  );
};

export default ProductList;
