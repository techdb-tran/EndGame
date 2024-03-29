import React, { useEffect, useState } from "react";
import "./ProductSinglePage.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formatPrice } from "../../constants/formatPrice";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../../redux/features/cartSlice/cartSlice";
import CartMessage from "../../components/CartMessage/CartMessage";
import { addToWishlist } from "../../redux/features/wishlistSlice/wishlistSlice";
import {
  actProductById,
} from "../../redux/features/products/productsSlice";
// import {
//   addComment,
//   addRating,
// } from "../../redux/features/products/productsSlice";

const ProductSinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLogged } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { product } = useSelector(state => state.products);
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);
  // const ratings = useSelector((state) => state.product.ratings);
  // const comments = useSelector((state) => state.product.comments);
  // const [rating, setRating] = useState(null);
  // const [comment, setComment] = useState("");
  console.log(product);
  // getting single product
  useEffect(() => {
    dispatch(actProductById(id));

    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus, dispatch]);

  let discountedPrice =
    product?.productSalePrice - product?.productSalePrice * (product?.discount / 100);

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > product?.stock) tempQty = product?.stock;
      return tempQty;
    });
  };
  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const addToCartHandler = (product) => {
    let discountedPrice =
      product?.productSalePrice -
      product?.productSalePrice * (product?.discount / 100);
    let totalPrice = quantity * discountedPrice;

    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
    dispatch(setCartMessageOn(true));
  };

  const addToWishlistHandler = (product) => {
    dispatch(addToWishlist({ ...product }));
  };
  
  console.log(product.img)

  const handleLoginPage = () => {
    navigate("/login");
  };

  // const handleRatingChange = (event) => {
  //   setRating(parseInt(event.target.value));
  // };

  // const handleCommentChange = (event) => {
  //   setComment(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(addRating({ productId: product.id, rating }));
  //   dispatch(addComment({ productId: product.id, comment }));
  //   setRating(null);
  //   setComment("");
  // };
  const imgLink = (product.img).split("\\n");
  console.log((product.img).split("\\n"));
  return (

    <main className="py-5 bg-whitesmoke">
      <div className="product-single">
        <div className="container">
          <div className="product-single-content bg-white grid">
            <div className="product-single-l">
              <div className="product-img">
                <div className="product-img-zoom">
                  <img
                    src={product.thumbnail}
                    alt=""
                    className="img-cover"
                  />
                </div>

                <div className="product-img-thumbs flex align-center my-2">
                  <div className="thumb-item">
                    <img
                      src={imgLink[0]}
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      src={imgLink[1]}
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      src={imgLink[2]}
                      alt=""
                      className="img-cover"
                    />
                  </div>
                  <div className="thumb-item">
                    <img
                      src={imgLink[3]}
                      alt=""
                      className="img-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="product-single-r">
              <div className="product-details font-manrope">
                <div className="title fs-20 fw-5">{product?.productName}</div>
                <div>
                  <p className="para fw-3 fs-15">{product?.productDes}</p>
                </div>
                <div className="info flex align-center flex-wrap fs-14">
                  <div className="rating">
                    <span className="text-orange fw-5">Rating:</span>
                    <span className="mx-1">{product?.rating}</span>
                  </div>
                  <div className="vert-line"></div>
                  <div className="brand">
                    <span className="text-orange fw-5">Category:</span>
                    <span className="mx-1 text-capitalize">
                      {product?.productType
                        ? product.productType.replace("-", " ")
                        : ""}
                    </span>
                  </div>
                </div>

                <div className="price">
                  <div className="flex align-center">
                    <div className="old-price text-gray">
                      {formatPrice(product?.productSalePrice)}
                    </div>
                    <span className="fs-14 mx-2 text-dark">
                      Inclusive of all taxes
                    </span>
                  </div>

                  <div className="flex align-center my-1">
                    <div className="new-price fw-5 font-poppins fs-24 text-orange">
                      {formatPrice(discountedPrice)}
                    </div>
                    <div className="discount bg-orange fs-13 text-white fw-6 font-poppins">
                      {product?.discountPercentage}% OFF
                    </div>
                  </div>
                </div>

                <div className="qty flex align-center my-4">
                  <div className="qty-text">Quantity:</div>
                  <div className="qty-change flex align-center mx-3">
                    <button
                      type="button"
                      className="qty-decrease flex align-center justify-center"
                      onClick={() => decreaseQty()}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <div className="qty-value flex align-center justify-center">
                      {quantity}
                    </div>
                    <button
                      type="button"
                      className="qty-increase flex align-center justify-center"
                      onClick={() => increaseQty()}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  {product?.stock === 0 ? (
                    <div className="qty-error text-uppercase bg-danger text-white fs-12 ls-1 mx-2 fw-5">
                      out of stock
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                {isLogged ? (
                  <div className="btns">
                    <button type="button" className="add-to-cart-btn btn">
                      <i className="fas fa-shopping-cart"></i>
                      <span
                        className="btn-text mx-2"
                        onClick={() => {
                          addToCartHandler(product);
                        }}
                      >
                        add to cart
                      </span>
                    </button>
                    <button type="button" className="buy-now btn mx-3">
                      <span className="fs-15">
                        <i class="fas fa-heart"></i>
                      </span>
                      <span
                        className="btn-text mx-2"
                        onClick={() => addToWishlistHandler(product)}
                      >
                        add to wishlist
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="btns">
                    <button type="button" className="add-to-cart-btn btn">
                      <i className="fas fa-shopping-cart"></i>
                      <span
                        className="btn-text mx-2"
                        onClick={() => {
                          handleLoginPage();
                        }}
                      >
                        add to cart
                      </span>
                    </button>
                    <button type="button" className="buy-now btn mx-3">
                      <span
                        className="btn-text"
                        onClick={() => handleLoginPage()}
                      >
                        add to wishlist
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <select value={rating} onChange={handleRatingChange}>
            <option value="">Select rating</option>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          {ratings[product.id] && <div>{ratings[product.id]} stars</div>}
          {comments[product.id] &&
            comments[product.id].map((c, i) => <div key={i}>{c}</div>)}
        </div> */}
      </div>

      {cartMessageStatus && <CartMessage />}
    </main>
  );
};

export default ProductSinglePage;
