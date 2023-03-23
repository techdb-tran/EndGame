import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../constants/formatPrice";
import { actFetchAllProduct } from "../../redux/features/products/productsSlice";
import "./Product.scss";

const Product = ({product}) => {

  return (
    <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className="product-item bg-white">
        <div className="category">{product?.productType}</div>
        <div className="product-item-img">
          <img
            className="img-cover"
            src={product?.thumbnail}
            alt={product?.productName}
          />
        </div>
        <div className="product-item-info fs-14">
          <div className="brand">
            {/* <span>Brand: </span>
            <span className="fw-7">{product?.}</span> */}
          </div>
          <div className="title py-2">{product?.productName}</div>
          <div className="price flex align-center justify-center">
            <span className="old-price">{formatPrice(product?.productSalePrice)}</span>
            <span className="new-price">
              {formatPrice(product?.discountedPrice)}
            </span>
            <span className="discount fw-6">
              ({product?.discountedPercentage}% Off)
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
