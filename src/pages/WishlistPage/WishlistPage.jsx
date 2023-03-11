import React from "react";
import { useSelector } from 'react-redux';
import WishlistItem from '../../components/WishlistItem/WishlistItem';
import './WishlistPage.scss'

const ProductWishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.items);

    return (
      <div>
        {wishlistItems.length === 0 && <div>Your wishlist is empty.</div>}
        {wishlistItems.map((item) => (
          <WishlistItem key={item.id} item={item} />
        ))}
      </div>
    );
};

export default ProductWishlist;
