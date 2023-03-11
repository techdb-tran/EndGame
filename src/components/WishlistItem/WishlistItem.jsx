import React from "react";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/features/wishlistSlice/wishlistSlice";

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromWishlist(item));
  };
  return (
    <div>
      <img
        style={{ width: "100px", height: "100px" }}
        src={item.thumbnail}
        alt=""
      />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.category}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default WishlistItem;
