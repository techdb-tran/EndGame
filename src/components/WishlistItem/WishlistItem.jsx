import React from "react";
import './WishlistItem.scss'
import { useDispatch } from "react-redux";
import { formatPrice } from "../../constants/formatPrice";
import { removeFromWishlist } from "../../redux/features/wishlistSlice/wishlistSlice";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromWishlist(item));
  };
  return (
    <div className="wishlistItem-container">
      <img
        style={{ width: "100px", height: "100px" }}
        src={item.thumbnail}
        alt=""
      />
      <p>{item.productName}</p>
      <p>{formatPrice(item.productSalePrice)}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default WishlistItem;
