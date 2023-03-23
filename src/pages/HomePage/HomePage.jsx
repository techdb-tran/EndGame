import React, { useEffect } from "react";
import "./HomePage.scss";
import Slider from "../../components/Slider/SliderTop";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/features/categorySlice/categorySlice";
import ProductList from "../../components/ProductList/ProductList";
import {
  fetchAsyncProducts,
  getAllProducts,
  getAllProductsStatus,
} from "../../redux/features/productSlice/productSlice";
import Loader from "../../components/Loader/Loader";
import { STATUS } from "../../constants/status";
import useScrollToTop from "../../hooks/useScrollToTop"
import { actFetchAllProduct } from "../../redux/features/products/productsSlice";
// import { actFetchAllProduct } from "../../redux/features/products/productsSlice";

const HomePage = () => {
  useScrollToTop()
  const dispatch = useDispatch();
  //const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(actFetchAllProduct());
  }, []);

  const {allProducts} = useSelector(state=>state.products);


  // const {products, isLoading} = useSelector((state) => state.products)

  // console.log(products);
  // useEffect(() => {
  //   dispatch(actFetchAllProduct())
  // },[])

  // randomizing the products in the list
  const tempProducts = [];
  if(allProducts?.length > 0){
    for(let i in allProducts){
      let randomIndex = Math.floor(Math.random() * allProducts.length);

      while(tempProducts.includes(allProducts[randomIndex])){
        randomIndex = Math.floor(Math.random() * allProducts.length);
      }
      tempProducts[i] = allProducts[randomIndex];
    }
  }

  // let catProductsOne = allProducts.filter(product => product.category === categories[0]);
  // let catProductsTwo = products.filter(product => product.category === categories[1]);
  // let catProductsThree = products.filter(product => product.category === categories[2]);
  // let catProductsFour = products.filter(product => product.category === categories[3]);

  return (
    <main>
      <div className='slider-wrapper'>
        <Slider />
      </div>
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              <div className='title-md'>
                <h3>See our products</h3>
              </div>
              {/* { productStatus === STATUS.LOADING ? <Loader /> : <ProductList allProducts = {tempProducts} />} */}
              <ProductList />
            </div>

            {/* <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsOne} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsTwo} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsThree} />}
            </div>

            <div className='categories-item'>
              <div className='title-md'>
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsFour} />}
            </div> */}
          </div>
        </div>
      </div>
    </main>
  )
};

export default HomePage;
